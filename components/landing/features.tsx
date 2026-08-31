import { Reveal } from "@/components/landing/reveal";
import { SectionHead } from "@/components/landing/section-head";

type Feature = {
  icon: { codePoint: number } | { text: string };
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: { codePoint: 10697 },
    title: "Isolated environments, every run",
    body: "Each job runs in its own ephemeral Kubernetes pod, torn down when it finishes. Nothing persists, nothing leaks between runs, projects, or teams.",
  },
  {
    icon: { codePoint: 128272 },
    title: "Scoped, short-lived permissions",
    body: "Repo access is granted per installation. Jobs get short-lived tokens scoped to exactly what they're doing — never a standing, all-access credential.",
  },
  {
    icon: { codePoint: 128273 },
    title: "Secrets, permissioned per environment",
    body: "Encrypted at rest, decrypted only server-side. Production credentials stay out of preview and dev runs — each environment gets exactly the access it needs.",
  },
  {
    icon: { text: "ADR" },
    title: "A decision record for every feature",
    body: "Every design review ends in a written ADR, committed alongside the code it justifies. Nothing ships without a paper trail.",
  },
  {
    icon: { text: "PR" },
    title: "Reviewed by the agent, then by you",
    body: "The agent checks its own diff against the plan. Then every change lands as a draft PR your team reads, comments on, and approves.",
  },
  {
    icon: { codePoint: 9648 },
    title: "Preview environments, automatically",
    body: "Every run gets its own temporary deployment, so you can see the change working before you approve it — not just read a diff.",
  },
  {
    icon: { codePoint: 9650 },
    title: "Automated deployments",
    body: "Approved changes deploy through the same pipeline every time — no manual steps, no drift between environments.",
  },
  {
    icon: { codePoint: 8962 },
    title: "Self-hosted, top to bottom",
    body: "Run it on your own Kubernetes cluster, or a bundled dev environment. Your code, your containers, your infrastructure.",
  },
  {
    icon: { codePoint: 9201 },
    title: "Automated test suites",
    body: "Markdown test scenarios run against your deployment on a schedule, catching regressions before your team does.",
  },
];

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  const content = "codePoint" in icon ? String.fromCodePoint(icon.codePoint) : icon.text;
  const className = "text" in icon ? "icon mono icon-text" : "icon";
  return <span className={className}>{content}</span>;
}

export function Features() {
  return (
    <section className="mkt-section" id="features">
      <SectionHead
        kicker="Security & control"
        title="Built to keep unsafe changes out"
        body="Every job runs in isolation. Every credential is scoped to its task. Every change is reviewed and tested before it ships."
      />
      <div className="mkt-features">
        {features.map((feature) => (
          <Reveal key={feature.title} className="mkt-feature">
            <FeatureIcon icon={feature.icon} />
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
