import { SectionHead } from "@/components/landing/section-head";

const items = [
  {
    tag: "BYOK",
    title: "Bring your own keys",
    body: "Connect OpenRouter, Anthropic, OpenAI, or a custom endpoint. Your API keys, your model choices, per job.",
  },
  {
    tag: "BYOI",
    title: "Bring your own infra",
    body: "Run it on your own Kubernetes cluster, or a bundled dev environment. Nothing lives on infrastructure you don't control.",
  },
  {
    tag: "BYOG",
    title: "Bring your own GitHub",
    body: "Sign in with the GitHub identity and repos you already have. No new account, no new access model to manage.",
  },
];

export function NoLockIn() {
  return (
    <section className="border-t border-rime-soft px-6 py-[clamp(56px,8vw,96px)]">
      <SectionHead
        kicker="No lock-in"
        title="Your keys. Your infra. Your GitHub."
        body="Nothing here runs on an account, a cluster, or a model provider you don't already control."
      />
      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.tag}
            className="rounded-card border border-rime-soft p-6"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-rime bg-surface-02 font-mono text-[10px] text-bifrost">
              {item.tag}
            </span>
            <h3 className="mt-4 text-base text-frost">{item.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-mist">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
