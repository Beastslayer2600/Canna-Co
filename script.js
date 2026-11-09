// Tribe & Tree — mockup behaviour

// Opening hours. 0 = Sunday. null = still to be confirmed with the club.
const HOURS = {
  1: ["07:00", "20:00"],
  2: ["07:00", "20:00"],
  3: ["07:00", "20:00"],
  4: ["07:00", "20:00"],
  5: ["07:00", "22:00"],
  6: ["07:00", "22:00"],
  0: null,
};
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ORDER = [1, 2, 3, 4, 5, 6, 0];

function fmt(t) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, "0")}${suffix}` : `${h12}${suffix}`;
}

function renderHours() {
  const today = new Date().getDay();
  document.querySelectorAll(".js-hours").forEach((table) => {
    table.innerHTML = ORDER.map((d) => {
      const h = HOURS[d];
      const val = h ? `${fmt(h[0])} – ${fmt(h[1])}` : '<span class="tbc">To be confirmed</span>';
      return `<tr class="${d === today ? "today" : ""}"><td>${DAY_NAMES[d]}${d === today ? " · today" : ""}</td><td>${val}</td></tr>`;
    }).join("");
  });

  const now = new Date();
  const h = HOURS[today];
  let open = false;
  if (h) {
    const mins = now.getHours() * 60 + now.getMinutes();
    const [oh, om] = h[0].split(":").map(Number);
    const [ch, cm] = h[1].split(":").map(Number);
    open = mins >= oh * 60 + om && mins < ch * 60 + cm;
  }
  document.querySelectorAll(".js-status").forEach((el) => {
    el.textContent = open ? `Open now · until ${fmt(h[1])}` : h ? "Closed right now" : "Sunday hours TBC";
    el.classList.toggle("closed", !open);
  });
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initAgeGate() {
  const gate = document.querySelector(".age-gate");
  if (!gate) return;
  let ok = false;
  try { ok = sessionStorage.getItem("tt-age-ok") === "1"; } catch (e) { /* storage blocked */ }
  if (ok) return;
  gate.classList.add("show");
  gate.querySelector(".js-age-yes").addEventListener("click", () => {
    try { sessionStorage.setItem("tt-age-ok", "1"); } catch (e) { /* storage blocked */ }
    gate.classList.remove("show");
  });
  gate.querySelector(".js-age-no").addEventListener("click", () => {
    gate.querySelector(".age-box").innerHTML =
      "<h3>Sorry, not yet</h3><p>Tribe &amp; Tree is for adults 18 and older. Come back when you're of age.</p>";
  });
}

function initForm() {
  const form = document.querySelector(".js-contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.querySelector("#name").value.trim().split(" ")[0];
    form.querySelector(".js-thanks-name").textContent = name || "friend";
    form.classList.add("sent");
  });
}

document.querySelectorAll(".js-year").forEach((el) => (el.textContent = new Date().getFullYear()));
renderHours();
initNav();
initAgeGate();
initForm();
