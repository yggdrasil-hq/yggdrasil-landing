import { Reveal } from "@/components/landing/reveal";
import { SectionHead } from "@/components/landing/section-head";

const notList = [
  "A code editor or IDE replacement",
  "A CI/CD pipeline — it complements the one you have",
  "A Jira/Linear-style project tracker",
  "Opinionated about your tech stack",
];

const isList = [
  "A quality enforcement system for AI-built code",
  "Isolated and permission-scoped, run by run",
  "Strict about process, with zero opinion on your tech stack",
  "Self-hosted on your own infrastructure, top to bottom",
];

export function SafeByDefault() {
  return (
    <section className="mkt-section">
      <SectionHead
        kicker="Safe by default"
        title="No unreviewed code. No standing access. No surprises."
        body="Isolated, reviewed and tested, merged on your terms — without dictating your stack."
      />
      <div className="mkt-compare">
        <Reveal className="mkt-compare-col no">
          <div className="label">Yggdrasil is not</div>
          <ul>
            {notList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mkt-compare-col yes">
          <div className="label">Yggdrasil is</div>
          <ul>
            {isList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
