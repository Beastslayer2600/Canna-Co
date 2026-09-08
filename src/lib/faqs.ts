/**
 * FAQ content. Reused on the home page (first four) and the /faq page.
 *
 * ⚠️ Anything touching South African cannabis law is deliberately general.
 * Have the operator (and ideally an attorney) review this copy before launch.
 */

export type Faq = {
  question: string;
  answer: string;
  category: "Visiting" | "Specials" | "Membership" | "In store" | "Practical";
};

export const faqs: Faq[] = [
  {
    category: "Membership",
    question: "Do I have to be a member to come in?",
    answer:
      "No. The store is open to any adult who walks through the door. The club bit — the lounge, the events — is members only, and you can sign up on the spot if you decide you want in.",
  },
  {
    category: "Membership",
    question: "How do I join the club?",
    answer:
      "Bring a valid ID and one of the team will walk you through it. Ten minutes, give or take: we check your age, go through the rules, you sign, you're in. No waiting list, no approval process.",
  },
  {
    category: "Visiting",
    question: "How old do I have to be?",
    answer:
      "Nineteen or older, no exceptions. We ask for ID, and yes, we'll ask you even if you're visibly well past it — we'd rather mildly insult a forty-year-old than let someone underage through.",
  },
  {
    category: "Specials",
    question: "What are the weekly specials?",
    answer:
      "Moon Monday takes money off the Moon Settler pre-rolls. Twisted Tuesday covers Greenhouse, Double Barrels and infused rolls. Family Fridays discounts the whole homebrand pre-roll line. Sunday is the Edible Bar buffet. The Specials page has the detail.",
  },
  {
    category: "Specials",
    question: "Do the specials ever sell out?",
    answer:
      "Often, yes. Stock is limited and the popular strains go first thing. If you're driving out for something specific, message us that morning and we'll check before you get in the car.",
  },
  {
    category: "Specials",
    question: "How does the Sunday Buffet work?",
    answer:
      "Single gummies at 10mg, 22mg, 44mg and 50mg are take 2 get 1 free — the 50mg deal excludes nougat and rainbow belts. The 150mg singles are 16% less, Ding packs are 13% less at 100mg and 8% less at 200mg, and cookies are 20% off.",
  },
  {
    category: "In store",
    question: "What's the Edible Bar?",
    answer:
      "A wall of gummies, jellies and cookies you choose by strength instead of by guesswork. Not sure where to start? Say so, and we'll point you at something sensible rather than something strong.",
  },
  {
    category: "Visiting",
    question: "Where exactly is the lounge?",
    answer:
      "Out the back, through the closet. That is not a figure of speech — you genuinely go through the closet. It's members only, so ask someone at the counter and they'll walk you through.",
  },
  {
    category: "Visiting",
    question: "What's actually in the lounge?",
    answer:
      "A big screen with sport on most weekends and a console the rest of the time, deep chairs you sink into, a sofa at the art end, and a slatted oak wall covered in framed prints. Plus the table the D&D nights run on.",
  },
  {
    category: "Visiting",
    question: "What happens at game night?",
    answer:
      "A Dungeons & Dragons table in the lounge, for members. Beginners and veterans both — nobody minds explaining a saving throw. Bring a level 8 character on the D&D Beyond app, and dice if you own any. Dates go up in store and on our socials.",
  },
  {
    category: "Membership",
    question: "What does membership cost?",
    answer:
      "Ask us in store or drop us a message and we'll go through the current options and what each includes. Nobody's going to push you to decide on the day.",
  },
  {
    category: "In store",
    question: "I'm completely new to this. Will I feel out of place?",
    answer:
      "Not here. A good chunk of the people who walk in have never done this before, and starting from scratch is most of our week. Ask the basic questions — genuinely, that's the job.",
  },
  {
    category: "In store",
    question: "Can you help me with growing at home?",
    answer:
      "Yes, gladly. First plant or fifth season, we'll talk through setup, feeding, light, and the specific mistakes that catch nearly everyone out the first time.",
  },
  {
    category: "Visiting",
    question: "Are you open on Sundays and public holidays?",
    answer:
      "Both. We're open seven days a week from 08:00 — until 20:00 Monday to Thursday, 21:00 on Friday and Saturday, and 18:00 on Sunday. Public holidays run on regular hours.",
  },
  {
    category: "Practical",
    question: "Is there parking?",
    answer:
      "Yes, right outside. It's usually quiet apart from Saturday mornings, which are reliably the busiest few hours of the week.",
  },
  {
    category: "Practical",
    question: "Are you discreet?",
    answer:
      "Completely. We don't share member details with anyone, we keep the space calm, and what happens inside stays inside. That's not a slogan, it's the arrangement.",
  },
  {
    category: "Visiting",
    question: "Do I need to book?",
    answer:
      "Not for the store — just walk in. For club events, or if you want a proper sit-down with someone who isn't being interrupted, message first so we can set the time aside.",
  },
  {
    category: "Practical",
    question: "Where exactly are you?",
    answer:
      "Moreleta Park, Pretoria East. The Visit page has the address, a map and directions — and we're easier to park at than anywhere in Menlyn.",
  },
];
