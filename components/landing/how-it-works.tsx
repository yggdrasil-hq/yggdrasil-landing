import { Reveal } from "@/components/landing/reveal";
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
    <section className="mkt-section" id="how-it-works">
      <SectionHead
        kicker="How it works"
        title="Six checkpoints between a description and production"
        body="Nothing skips a step. Nothing merges unreviewed or untested."
      />
      <div className="mkt-steps">
        {steps.map((step) => (
          <Reveal key={step.n} className="mkt-step">
            <div className="n">{step.n}</div>
            {step.n !== "03" && step.n !== "06" ? (
              <span className="arrow">▶</span>
            ) : null}
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
