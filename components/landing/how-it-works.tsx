import { SectionHead } from "@/components/landing/section-head";

const steps = [
  {
    n: "01",
    title: "Describe",
    body: "Give the feature a title and any context. That's the entire ask.",
  },
  {
    n: "02",
    title: "Plan & design review",
    body: "You lead the planning. Scope, edge cases, and constraints get written up as a decision record before a single line of code is touched.",
  },
  {
    n: "03",
    title: "Agent builds",
    body: "Approved plans get built unattended, inside an isolated environment with no access beyond what that job needs.",
  },
  {
    n: "04",
    title: "Automated tests",
    body: "Test scenarios run against the build automatically, catching regressions before anyone has to go looking for them.",
  },
  {
    n: "05",
    title: "Agent & user review",
    body: "The agent checks its diff against the approved plan first. Then everything lands as a real pull request against a live preview — your team reviews it, requests changes, or sends it back.",
  },
  {
    n: "06",
    title: "Merge",
    body: "Merge when it's ready. Deployment to your target environment is automated from there.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-rime-soft px-6 py-[clamp(56px,8vw,96px)]"
    >
      <SectionHead
        kicker="How it works"
        title="Six checkpoints between a description and production"
        body="Nothing skips a step. Nothing merges unreviewed or untested."
      />
      <div className="mx-auto grid max-w-content grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.n}
            className="rounded-card border border-rime-soft bg-surface-01 p-6"
          >
            <div className="font-mono text-[13px] text-bifrost">{step.n}</div>
            <h3 className="mt-3.5 text-base text-frost">{step.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-mist">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
