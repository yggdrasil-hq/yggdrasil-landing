import { Reveal } from "@/components/landing/reveal";
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
    <section className="mkt-section">
      <SectionHead
        kicker="No lock-in"
        title="Your keys. Your infra. Your GitHub."
        body="Nothing here runs on an account, a cluster, or a model provider you don't already control."
      />
      <div className="mkt-features mkt-features-compact">
        {items.map((item) => (
          <Reveal key={item.tag} className="mkt-feature">
            <span className="icon icon-text">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
