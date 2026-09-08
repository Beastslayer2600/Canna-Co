/**
 * FAQ content. Reused on the home page (first four) and the /faq page.
 *
 * ⚠️ Anything touching South African cannabis law is deliberately general.
 * Have the operator (and ideally an attorney) review this copy before launch.
 */

export type Faq = {
  question: string;
  answer: string;
  category: "Visiting" | "Membership" | "In store" | "Practical";
};

export const faqs: Faq[] = [
  {
    category: "Membership",
    question: "Do I have to be a member to come in?",
    answer:
      "No. The store side is open to any adult who walks through the door. The club — the lounge and members' events — is members only, and you can sign up on the spot.",
  },
  {
    category: "Membership",
    question: "How do I join the club?",
    answer:
      "Come in with a valid ID, and one of the team will take you through the sign-up. It takes about ten minutes: we confirm your age, go through the club rules with you, and you're a member from that day.",
  },
  {
    category: "Visiting",
    question: "How old do I have to be?",
    answer:
      "Eighteen or older, without exception. We ask for ID, and we'd rather ask someone who looks obviously old enough than let someone underage slip through.",
  },
  {
    category: "Membership",
    question: "What does membership cost?",
    answer:
      "Ask us in store or send us a message — we'll walk you through the current membership options and what each one includes. There's no pressure to decide on the spot.",
  },
  {
    category: "In store",
    question: "I'm completely new to this. Will I feel out of place?",
    answer:
      "Not with us. A good chunk of the people who come in have never done this before, and the team is used to starting from scratch. Ask the basic questions — that's what we're here for.",
  },
  {
    category: "In store",
    question: "Can you help me with growing at home?",
    answer:
      "Yes. Whether it's your first plant or your fifth season, we'll happily talk through setup, feeding, light and the mistakes that catch most people out.",
  },
  {
    category: "Practical",
    question: "Is there parking?",
    answer:
      "Yes — there's parking right outside, and it's usually quiet outside of Saturday mornings.",
  },
  {
    category: "Practical",
    question: "Are you discreet?",
    answer:
      "Completely. We don't share member details, we keep the space calm, and what happens inside stays inside.",
  },
  {
    category: "Visiting",
    question: "Do I need to book?",
    answer:
      "Not for the store — just walk in during opening hours. For club events or if you want a proper sit-down with someone, message us first so we can set the time aside.",
  },
  {
    category: "Practical",
    question: "Where exactly are you?",
    answer:
      "We're in Moreleta Park, Pretoria East. The Visit page has the full address, a map and directions.",
  },
];
