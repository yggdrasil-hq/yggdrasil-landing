import { Reveal } from "@/components/landing/reveal";
import { ButtonLink } from "@/components/ui/button-link";

const APP_HREF = "https://app.yggdrasil.cfd";

export function CtaBand() {
  return (
    <section className="mkt-cta-band">
      <Reveal className="mkt-cta-panel">
        <h2>Ready to ship AI-built code you can trust?</h2>
        <p>Sign in with GitHub — no separate account to create.</p>
        <div className="mkt-cta-row">
          <ButtonLink href={APP_HREF} variant="primary" size="lg">
            Continue with GitHub
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
