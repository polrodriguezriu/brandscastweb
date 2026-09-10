/**
 * Guardrail for public claims that conflict with the product or the 2026
 * internal communication report. This deliberately catches only phrases that
 * are unsafe in any marketing context; nuanced claims still require review.
 *
 * Run directly with: node scripts/check-claims.mjs
 */
import fs from "node:fs";
import { listCheckFiles } from "./list-check-files.mjs";

const RULES = [
  {
    pattern:
      /45% of employees without a desk|Only 9% of employees without a desk|45% miss the reasons why|83\.7% of opens qualified as attentive reading/i,
    reason:
      "Keep Staffbase findings tied to surveyed respondents and PoliteMail attention tied to its provider threshold.",
  },
  {
    pattern:
      /of non-desk employees say they never receive|one in eight people without a desk|Only 48% of non-desk employees|63% of employees who are considering leaving/i,
    reason:
      "Keep Staffbase leadership, manager and retention findings tied to surveyed respondents.",
  },
  {
    pattern:
      /of internal emails are opened\. Internal email works|Two employees in three open|83\.7% of those who open it spend real time|83\.7% of people who open an internal email/i,
    reason:
      "Do not turn PoliteMail recorded opens or its attention threshold into confirmed human behaviour.",
  },
  {
    pattern:
      /Neither holds in 2026|closer to a default one|population that has to be taught what a podcast is/i,
    reason:
      "US podcast and online-audio consumption support a bounded familiarity hypothesis, not a universal workforce conclusion.",
  },
  {
    pattern:
      /any podcast app|listen from any app|any app that supports private RSS/i,
    reason: "Private RSS works only in compatible podcast apps.",
  },
  {
    pattern: /any RSS-compatible player/i,
    reason: "Name verified compatible apps instead of making a blanket claim.",
  },
  {
    pattern: /listens? automatically|accessible to everyone/i,
    reason: "Distribution does not guarantee listening or universal access.",
  },
  {
    pattern: /listen(?:ing)? (?:to (?:it|them) )?(?:anytime, )?anywhere/i,
    reason: "Listening suitability depends on role, environment and safety.",
  },
  {
    pattern: /Apple Audio|Castbox/i,
    reason: "Use the verified compatible-app list.",
  },
  {
    pattern:
      /reach every employee|keep everyone (?:aligned|informed)|everyone hears the same/i,
    reason: "Do not promise universal workforce coverage or alignment.",
  },
  {
    pattern:
      /reach everyone|everyone actually opens|same (?:message|information)[^.]{0,60}everyone/i,
    reason: "Do not turn access or distribution into a universal outcome.",
  },
  {
    pattern: /without (?:adding )?more meetings|replace status meetings/i,
    reason: "Audio complements meetings and existing channels.",
  },
  {
    pattern:
      /replace (?:some )?(?:internal |recurring |long )?(?:meetings|calls)|reduce (?:the need for )?(?:frequent )?(?:meetings|town halls)|reduce meeting load/i,
    reason:
      "Meeting reduction must be measured, not promised as a product result.",
  },
  {
    pattern:
      /replace or compress the all-hands|replaces? the end of sprint demo/i,
    reason:
      "Audio may supplement live sessions; do not prescribe their replacement.",
  },
  {
    pattern:
      /people actually consume|reps actually consume|actually (?:get|gets) consumed|employees actually listen to|people will listen|they will listen/i,
    reason: "Adoption is a pilot outcome, not a guaranteed product claim.",
  },
  {
    pattern:
      /many teams see (?:good|strong) (?:completion|results)|audio works much better/i,
    reason: "Do not present an unsourced outcome or duration as a benchmark.",
  },
  {
    pattern:
      /recorded in under fifteen minutes|set up in an afternoon|create your startup audio in minutes/i,
    reason:
      "Production and setup time depend on review, access, quality and policy requirements.",
  },
  {
    pattern:
      /audio can increase engagement fast|engagement (?:increases|improves) when/i,
    reason: "Engagement impact is a pilot hypothesis, not a product guarantee.",
  },
  {
    pattern:
      /clear web listening option|members? (?:can )?listen (?:on|in|through) (?:the )?(?:web|browser)/i,
    reason:
      "Members listen through compatible private-RSS apps, not a web player.",
  },
  {
    pattern:
      /token is bound to the original listener|consumption goes up|without asking anyone to do anything differently/i,
    reason:
      "Do not overstate feed security or infer adoption from distribution.",
  },
  {
    pattern:
      /fully private infrastructure|content completely private|feed that only works for them|only (?:invited|current) (?:listeners|employees|staff)[^.]{0,40}(?:access|listen|subscribe)/i,
    reason:
      "Private feed URLs are credentials and downloaded copies may persist.",
  },
  {
    pattern:
      /without worrying about the outside world|make (?:internal audio|HR announcements)[^.]{0,40}simple, secure|people choose when and where they listen/i,
    reason:
      "Describe authenticated-feed limits and approved listening contexts instead of implying containment or universal suitability.",
  },
  {
    pattern:
      /feed (?:link )?is unique and cannot be transferred|secure (?:audio )?feed that only your employees can access|stops working immediately|access is revoked immediately|revoke access instantly|as secure as any other internal system/i,
    reason:
      "Describe future feed revocation precisely; URLs can be forwarded and downloads may persist.",
  },
  {
    pattern:
      /revoke (?:it|access) (?:instantly|immediately|quickly|fast)|access revoked instantly|only active (?:staff|employees|members)[^.]{0,40}(?:listen|access)/i,
    reason:
      "Revocation blocks future feed requests; feed URLs can be forwarded and downloads may persist.",
  },
  {
    pattern: /full access control|complete access control/i,
    reason: "Do not describe bearer-URL distribution as total access control.",
  },
  {
    pattern:
      /listening analytics[^.]{0,240}(?:understand|confirm) (?:reach|which messages?|what updates?|consumption)|analytics[^.]{0,160}confirm[^.]{0,80}(?:reaching|consumed)/i,
    reason:
      "Listening analytics report recorded activity, not reach, comprehension or impact.",
  },
  {
    pattern:
      /any AI agent|data starts to appear automatically|employee listening analytics begin to build up automatically/i,
    reason:
      "State compatibility and data prerequisites explicitly instead of promising universal or automatic operation.",
  },
  {
    pattern:
      /all features (?:are )?(?:included in|available (?:in|during)|free (?:in|for|during)) (?:the )?(?:free )?trial|every other Brandscast feature free|trial includes one audio enhancement|first episode enhancement is included|text.to.audio requires a paid plan|text.to.audio becomes available after upgrading/i,
    reason:
      "The trial includes 5 shared minutes for text-to-audio and enhancement for the entire trial, with no renewal; do not promise unrestricted access or retain the retired paid-only restriction.",
  },
  {
    pattern: /Growth[^.]{0,50}240 (?:AI )?min|240 (?:AI )?min[^.]{0,50}Growth/i,
    reason: "The current Growth allowance is 180 shared AI-tools minutes.",
  },
  {
    pattern:
      /separate feeds? for (?:separate )?audiences|additional feeds? for (?:managers|teams|regions)|one feed per (?:Track|podcast|audio)/i,
    reason:
      "Brandscast provides one feed per Member containing that Member's assigned Tracks.",
  },
  {
    pattern: /faster than an email|popular podcast apps/i,
    reason:
      "Do not rank audio against email or imply compatibility beyond the verified app list.",
  },
  {
    pattern:
      /audio formats? that boost engagement|audio (?:builds|creates|improves) (?:trust|engagement|connection)|create a ritual that builds trust/i,
    reason:
      "Trust and engagement are outcomes to test, not direct product effects.",
  },
  {
    pattern:
      /reduces? the need for extra meetings|reduce meeting overload|keep every shift aligned|faster adoption of updates/i,
    reason:
      "Meeting load, adoption and alignment require a baseline and pilot evidence.",
  },
  {
    pattern:
      /each audio has its own private feed link|when someone leaves, their access leaves with them|you(?:'|&apos;)ll know it landed/i,
    reason:
      "Keep the per-member feed model, download boundary and comprehension boundary explicit.",
  },
  {
    pattern: /highest (?:return on investment|ROI) for most/i,
    reason:
      "Do not present an unmeasured use case as the highest-return option.",
  },
  {
    pattern:
      /audio fixes this|employees actually use|adoption is usually strong|short episodes build trust|improve retention|can save hours of back and forth/i,
    reason:
      "Frame adoption, comprehension and operating impact as pilot outcomes.",
  },
  {
    pattern: /more likely to pay attention|remember messages that are simple/i,
    reason:
      "Treat attention and recall as audience outcomes to test, not generic copywriting effects.",
  },
  {
    pattern:
      /fewer meetings and better alignment|without forcing everyone into (?:another )?(?:meeting|call)/i,
    reason: "Test channel and meeting outcomes instead of promising them.",
  },
  {
    pattern: /consume on the go|listen on the go/i,
    reason:
      "Name an appropriate listening context instead of implying universal safety.",
  },
  {
    pattern:
      /long emails nobody|updates that get missed in email|no one misses/i,
    reason: "Do not imply that internal email is broadly unread.",
  },
  {
    pattern: /internal emails? (?:is|are) not read/i,
    reason:
      "Internal email performs well; frame audio around attention and access.",
  },
  {
    pattern:
      /content gets ignored|people do not read long internal updates|operators do not live in documents|frontline teams do not need more portals/i,
    reason:
      "Do not dismiss existing channels or claim that intended audiences broadly ignore them.",
  },
  {
    pattern:
      /GDPR compliant|EU regulations compliance|shared only with your team|ensure consistent performance/i,
    reason:
      "Describe hosting, controls and review evidence precisely instead of making blanket compliance or security claims.",
  },
  {
    pattern:
      /start small, prove value|one pilot[^.]{0,40}(?:enough to )?(?:prove|validate)|proven use cases|works especially well/i,
    reason:
      "A pilot tests a defined hypothesis; it does not prove broad value or validate every use case.",
  },
  {
    pattern:
      /no more town halls|keep (?:support|agency|delivery|campuses?|education|fast moving tech|reps|remote)[^.]{0,35}aligned/i,
    reason:
      "Alignment and meeting reduction are outcomes to measure, not headline guarantees.",
  },
  {
    pattern:
      /Staffbase[^.]{0,180}(?:seven countries|seven-country)|(?:seven countries|seven-country)[^.]{0,180}Staffbase/i,
    reason: "The 2025 Staffbase/YouGov sample covers six countries, not seven.",
  },
  {
    pattern:
      /80% of the global workforce is (?:not desk-bound|deskless)|80% of (?:the )?workers? (?:do not|don.t) (?:have|use) (?:email|an inbox)/i,
    reason:
      "The deskless figure is an older structural estimate, not a current census or a measure of email access.",
  },
  {
    pattern:
      /around 2\.7 billion people, roughly 80% of the global workforce, work without a desk/i,
    reason:
      "Introduce the 2.7 billion figure as a dated 2018 estimate in the sentence that states it.",
  },
  {
    pattern:
      /why [^.]{0,60}works? better than|many companies see (?:good|strong) results/i,
    reason:
      "Comparative performance and results require a defined baseline and evidence.",
  },
  {
    pattern:
      /delivers? immediate value|adoption builds when|reduces? friction and frees? (?:up )?time/i,
    reason:
      "Value, adoption and operating impact are pilot outcomes, not guaranteed effects.",
  },
  {
    pattern:
      /documents? nobody opens|tools? nobody opens|usual channels do not help much|teams never see them at all/i,
    reason:
      "Do not dismiss existing channels or claim universal non-use without evidence.",
  },
  {
    pattern:
      /(?:audio|voice|messages?|episodes?|rituals?) (?:builds?|creates?|improves?) trust|audio helps? avoid misinterpretation/i,
    reason:
      "Trust and interpretation changes need audience evidence; listening alone does not prove them.",
  },
  {
    pattern:
      /episodes? (?:reduce drift|create understanding|create clarity)|audio makes training easier|audio helps culture travel|audio to improve alignment|save meetings for/i,
    reason:
      "Clarity, learning, alignment and time effects must be tested against a baseline.",
  },
  {
    pattern:
      /74% engaged|private audio is ideal here|short, focused episodes usually perform best/i,
    reason:
      "Do not publish illustrative metrics or universal format recommendations as evidence.",
  },
  {
    pattern:
      /no security risks|control exactly who has access|episodes are actually heard and by whom/i,
    reason:
      "Private feed URLs are bearer credentials, and listening signals do not prove identity.",
  },
  {
    pattern:
      /know who listened|track who listened|access control is real|sensitive content never leaks|episodes appear in their player without requiring/i,
    reason:
      "Do not infer listener identity, guarantee containment or turn delivery into automatic adoption.",
  },
  {
    pattern:
      /who is listening and how much|know who is actively listening|actual listening behaviour|active members who have listened|inactive members who have not listened|percentage of your audience is actively listening|which members have never listened/i,
    reason:
      "Describe activity associated with a Member feed; bearer URLs and shared devices limit person-level attribution.",
  },
  {
    pattern:
      /get the most listens and replicate what works|mobile listening often happens during commutes|more accurate picture of known listeners/i,
    reason:
      "Recorded requests do not explain causality, listening context or confirmed listener identity.",
  },
  {
    pattern:
      /know who you reached|actually reaching|people understand faster|teams align faster|rumours lose oxygen/i,
    reason:
      "Feed activity, comprehension, alignment and perception are separate measurements.",
  },
  {
    pattern:
      /some people read them, many do not|make training and compliance easier to complete|under 15 minutes to maintain engagement/i,
    reason:
      "Do not dismiss written channels or publish an unmeasured completion or duration outcome.",
  },
  {
    pattern:
      /fewer missed updates, less repetition, better alignment|every other channel leaves out|who has access to each feed/i,
    reason:
      "Do not promise operating outcomes or misstate feed activity and the per-Member feed model.",
  },
  {
    pattern:
      /simple and secure|effortless access control|you know who has access|single source of truth for context/i,
    reason:
      "Describe assigned entitlements, bearer-URL risk and the separate written source of truth precisely.",
  },
  {
    pattern:
      /make listening effortless|keep access effortless|making access frictionless|planning effortless/i,
    reason:
      "Private RSS still requires compatible apps, subscription steps and audience-specific access validation.",
  },
  {
    pattern:
      /message actually lands|clients notice|audio makes knowledge easier to absorb|teams keep answers consistent, ramp faster/i,
    reason:
      "Do not turn delivery into comprehension, business impact or learning evidence.",
  },
  {
    pattern:
      /buried in email|audio works well for sales because|five to ten minutes (?:works well|is a strong default)|for most teams[^.]{0,80}(?:monthly|biweekly)/i,
    reason:
      "Do not dismiss email or publish universal channel, duration or cadence recommendations.",
  },
  {
    pattern: /keep culture strong|stay connected async/i,
    reason:
      "Do not encode unmeasured culture or connection outcomes in SEO titles.",
  },
  {
    pattern:
      /each group gets a private feed|create a separate podcast or Track for any segment/i,
    reason:
      "Each Member has one private feed containing that Member's assigned Tracks.",
  },
  {
    pattern:
      /private audio works so well|leaders feel more human|remote and hybrid teams feel closer/i,
    reason:
      "Usefulness, perception and connection are outcomes to validate with the audience.",
  },
  {
    pattern:
      /fits into everyone(?:'|’|&apos;)s day|employees listen when it fits their schedule|forcing everyone into the same call/i,
    reason:
      "Do not assume universal availability or dismiss live channels; validate safe access by group.",
  },
  {
    pattern: /IAB certification/i,
    reason: "IAB certification is not relevant to private internal audio.",
  },
];

const appFiles = listCheckFiles("src/app", "*.tsx");
const componentFiles = listCheckFiles("src/components", "*.tsx");
const socialSourceFiles = listCheckFiles("public/report/social-src", "*.svg");
const files = [
  ...appFiles,
  ...componentFiles,
  ...socialSourceFiles,
  "public/llms.txt",
];
const errors = [];

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  // Founder-approved restoration (2026-09-10): this exact homepage headline
  // states a communication goal, not measured or guaranteed workforce reach.
  // Keep the universal-outcome rule active for all other copy and surfaces.
  if (file === "src/app/page.tsx") {
    source = source.replace(
      /(<h1>\s*)Keep everyone informed(?=\{" "\}\s*<span[\s\S]*?without asking for their full attention\s*<\/span>\s*<\/h1>)/,
      "$1Keep your team informed",
    );
  }
  const lines = source.split("\n");

  for (const rule of RULES) {
    let matchedLine = false;

    lines.forEach((line, index) => {
      if (rule.pattern.test(line)) {
        errors.push(`${file}:${index + 1}\n   ${rule.reason}`);
        matchedLine = true;
      }
    });

    if (!matchedLine && rule.pattern.test(source.replace(/\s+/g, " "))) {
      errors.push(`${file}\n   ${rule.reason} (phrase spans multiple lines)`);
    }
  }
}

if (errors.length) {
  console.error("\n✖ Public copy contains prohibited claims:\n");
  errors.forEach((error) => console.error(`• ${error}\n`));
  console.error(
    "Rewrite the claim or update the guardrail with a documented reason.\n",
  );
  process.exit(1);
}

console.log("✓ public claims pass the report-led guardrails");
