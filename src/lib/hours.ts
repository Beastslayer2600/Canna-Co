import { site } from "./site";
import { specials } from "./specials";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type DayName = (typeof DAYS)[number];

/** The shop's own clock, wherever the visitor happens to be. */
export const SHOP_TIMEZONE = "Africa/Johannesburg";

const shopTimeFormat = new Intl.DateTimeFormat("en-ZA", {
  timeZone: SHOP_TIMEZONE,
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/** Day name and minutes-since-midnight, in Johannesburg. */
export function shopNow(now = new Date()) {
  const parts = shopTimeFormat.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday") as DayName;
  // "24" shows up at midnight in some ICU builds; normalise it to 0.
  const hour = Number(get("hour")) % 24;
  return { day: weekday, minutes: hour * 60 + Number(get("minute")) };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function slotForDay(day: DayName) {
  return site.hoursSpec.find((slot) =>
    (slot.days as readonly string[]).includes(day),
  );
}

export type OpenState =
  | { status: "open"; closesAt: string; closingSoon: boolean }
  | { status: "closed"; opensAt: string; opensDay: "today" | "tomorrow" };

/** Whether the shop is open right now, and the next thing that happens. */
export function openState(now = new Date()): OpenState {
  const { day, minutes } = shopNow(now);
  const today = slotForDay(day);

  if (today) {
    const opens = toMinutes(today.opens);
    const closes = toMinutes(today.closes);

    if (minutes >= opens && minutes < closes) {
      return {
        status: "open",
        closesAt: today.closes,
        closingSoon: closes - minutes <= 60,
      };
    }
    if (minutes < opens) {
      return { status: "closed", opensAt: today.opens, opensDay: "today" };
    }
  }

  // Past closing (or a day with no hours): find the next day that opens.
  const index = DAYS.indexOf(day);
  for (let step = 1; step <= 7; step++) {
    const next = slotForDay(DAYS[(index + step) % 7]);
    if (next) {
      return {
        status: "closed",
        opensAt: next.opens,
        opensDay: step === 1 ? "tomorrow" : "today",
      };
    }
  }

  return { status: "closed", opensAt: "08:00", opensDay: "tomorrow" };
}

/** The special running today, if there is one. */
export function todaysSpecial(now = new Date()) {
  const { day } = shopNow(now);
  return specials.find((special) => special.day === day);
}
