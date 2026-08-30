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
    <section className="border-t border-rime-soft px-6 py-[clamp(56px,8vw,96px)]">
      <SectionHead
        kicker="Safe by default"
        title="No unreviewed code. No standing access. No surprises."
        body="Isolated, reviewed and tested, merged on your terms — without dictating your stack."
      />
      <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-card border border-rime-soft p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-shadow">
            Yggdrasil is not
          </div>
          <ul className="mt-3.5 flex flex-col gap-2.5">
            {notList.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-sm leading-[1.5] text-shadow before:absolute before:left-0 before:content-['–']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-card border border-rime bg-surface-01 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-bifrost">
            Yggdrasil is
          </div>
          <ul className="mt-3.5 flex flex-col gap-2.5">
            {isList.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-sm leading-[1.5] text-mist before:absolute before:left-0 before:text-bifrost before:content-['+']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
