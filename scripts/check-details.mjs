/**
 * Fails loudly if the site still carries placeholder business details.
 * Run before a demo or a deploy: `npm run check:details`.
 */
import { readFileSync } from "node:fs";

const file = "src/lib/site.ts";
const source = readFileSync(file, "utf8");

const placeholders = [
  { label: "Phone number", pattern: /\+27 12 000 0000/ },
  { label: "Phone link (tel:)", pattern: /tel:\+27120000000/ },
  { label: "WhatsApp number", pattern: /"27600000000"/ },
  { label: "Email address", pattern: /hello@cannaandco\.co\.za/ },
  { label: "Street address", pattern: /Moreleta Village Centre/ },
  { label: "Street name", pattern: /Rubenstein Drive/ },
  { label: "Domain", pattern: /cannaandco\.co\.za"/ },
  { label: "Instagram handle", pattern: /instagram\.com\/cannaco\.moreleta/ },
  { label: "Facebook handle", pattern: /facebook\.com\/cannaco\.moreleta/ },
];

const outstanding = placeholders.filter((item) => item.pattern.test(source));

if (outstanding.length === 0) {
  console.log(`✓ ${file}: no placeholder details left.`);
  process.exit(0);
}

console.error(`\n⚠  ${outstanding.length} placeholder detail(s) still in ${file}:\n`);
for (const item of outstanding) console.error(`   · ${item.label}`);
console.error(`\n   These are visible to anyone looking at the site — the phone
   number alone shows in the top bar, the footer, the Visit page and
   the Contact page. Fill them in before showing this to anyone.\n`);
process.exit(1);
