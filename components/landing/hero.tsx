import { Reveal } from "@/components/landing/reveal";
import { ButtonLink } from "@/components/ui/button-link";

const APP_HREF = "https://app.yggdrasil.cfd";

export function Hero() {
  return (
    <section className="mkt-hero">
      <Reveal as="span" className="mkt-eyebrow">
        <span className="dot" />
        Secure, self-hosted AI development
      </Reveal>

      <Reveal className="mkt-hero-title">
        <h1>
          AI-built code you can actually <span className="accent">trust</span>.
        </h1>
      </Reveal>

      <Reveal className="mkt-hero-sub">
        <p className="sub">
          Describe a feature in plain language. An agent plans it with you,
          builds it in an isolated environment, and delivers a tested pull
          request for your review — all on infrastructure you control.
        </p>
      </Reveal>

      <Reveal className="mkt-cta-row">
        <ButtonLink href={APP_HREF} variant="primary" size="lg">
          Continue with GitHub
        </ButtonLink>
        <ButtonLink href="#how-it-works" variant="outline" size="lg">
          See how it works
        </ButtonLink>
      </Reveal>

      <Reveal className="mkt-mockup-wrap">
        <div className="mkt-mockup-glow" />
        <div className="mkt-float f1">
          <span className="ic">✓</span>
          <span>
            <b>Tests passed</b>
            <span>12 scenarios, 0 regressions</span>
          </span>
        </div>
        <div className="mkt-float f2">
          <span className="ic">▮</span>
          <span>
            <b>Preview deployed</b>
            <span>temporary, per run</span>
          </span>
        </div>
        <div className="mkt-mockup">
          <div className="mkt-chrome">
            <span className="dots">
              <span />
              <span />
              <span />
            </span>
            <span className="url">
              <span className="lock em-tint">🔒</span>
              app.yggdrasil.cfd/projects/acme-storefront/features/saved-payment-methods
            </span>
          </div>
          <div className="mkt-mockup-body">
            <div className="mkt-mockup-title-row">
              <h3>Saved payment methods</h3>
              <span
                className="badge"
                style={{ background: "#4f9bf022", color: "#4f9bf0" }}
              >
                Plan review
              </span>
            </div>
            <div className="bubble">
              <div className="who">Agent</div>
              <p>
                I&rsquo;ll spec out saved payment methods. First — should we
                support more than one saved card per customer, or just one?
              </p>
            </div>
            <div className="bubble user">
              <div className="who">You</div>
              <p>Multiple cards, with one marked default.</p>
            </div>
            <div className="bubble">
              <div className="who">Agent</div>
              <p>
                Got it. I&rsquo;ll use a Stripe <b>SetupIntent</b> to tokenize
                the card and store only the payment method id + last4/brand.
                Writing the ADR now.
              </p>
            </div>
          </div>
          <div className="mkt-mockup-status">
            <span className="mkt-status-chip ok">
              <span className="d" />
              preview live
            </span>
            <span className="mkt-status-chip ok">
              <span className="d" />
              tests 12/12
            </span>
            <span className="mkt-status-chip run">
              <span className="d" />
              isolated environment
            </span>
            <span className="mkt-status-chip idle">
              <span className="d" />
              draft PR pending review
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
