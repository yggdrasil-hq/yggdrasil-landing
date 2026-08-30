import { ButtonLink } from "@/components/ui/button-link";

const LOGIN_HREF = "/app/login";

export function Hero() {
  return (
    <section className="px-6 pb-[clamp(48px,8vw,96px)] pt-[clamp(64px,10vw,120px)] text-center">
      <span className="inline-flex h-7 items-center gap-2 rounded-pill border border-rime bg-surface-01 px-3.5 text-xs text-mist">
        <span className="h-1.5 w-1.5 rounded-full bg-bifrost shadow-[0_0_0_3px_rgba(47,212,198,0.18)]" />
        Secure AI development — not AI slop
      </span>

      <h1 className="mx-auto mt-6 max-w-[20ch] text-[clamp(38px,6.4vw,68px)] font-semibold leading-[1.04] tracking-[-0.035em] text-frost">
        AI-built code you can actually <span className="text-bifrost">trust</span>.
      </h1>

      <p className="mx-auto mt-5 max-w-[620px] text-[clamp(15px,1.6vw,18px)] leading-[1.55] text-mist">
        No unreviewed AI slop. Every feature is planned, built in an isolated
        environment, reviewed and tested before it merges — self-hosted, on
        your own infrastructure.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href={LOGIN_HREF} variant="primary" size="lg">
          Continue with GitHub
        </ButtonLink>
        <ButtonLink href="#how-it-works" variant="outline" size="lg">
          See how it works
        </ButtonLink>
      </div>

      <div className="relative mx-auto mt-[clamp(48px,8vw,88px)] max-w-[760px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[60px] z-0 rounded-full blur-[10px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(47, 212, 198, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 overflow-hidden rounded-panel border border-rime bg-surface-01 text-left shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(191,233,238,0.06)]">
          <div className="flex items-center gap-4 border-b border-rime-soft bg-surface-02 px-4 py-3">
            <span className="flex flex-shrink-0 gap-1.5">
              <span className="h-[9px] w-[9px] rounded-full bg-rime" />
              <span className="h-[9px] w-[9px] rounded-full bg-rime" />
              <span className="h-[9px] w-[9px] rounded-full bg-rime" />
            </span>
            <span className="flex h-6 flex-1 items-center rounded-pill border border-rime-soft bg-surface-01 px-3 font-mono text-[11px] text-shadow">
              app.yggdrasil.dev/projects/acme-storefront/features/saved-payment-methods
            </span>
          </div>
          <div className="p-5">
            <div className="mb-4 flex items-center gap-2.5">
              <h3 className="text-[15px] text-frost">Saved payment methods</h3>
              <span
                className="inline-flex h-[22px] items-center rounded-pill px-2.5 text-[11px] font-medium"
                style={{ background: "#4f9bf022", color: "#4f9bf0" }}
              >
                Plan review
              </span>
            </div>

            <div className="mt-0 w-[88%] rounded-sm border border-rime-soft bg-surface-02 p-3">
              <div className="mb-1 text-[10px] font-medium text-shadow">Agent</div>
              <p className="m-0 text-[13px] leading-[1.5] text-mist">
                I&rsquo;ll spec out saved payment methods. First — should we
                support more than one saved card per customer, or just one?
              </p>
            </div>
            <div className="ml-auto mt-2.5 w-[88%] rounded-sm border border-rime bg-surface-03 p-3">
              <div className="mb-1 text-[10px] font-medium text-shadow">You</div>
              <p className="m-0 text-[13px] leading-[1.5] text-mist">
                Multiple cards, with one marked default.
              </p>
            </div>
            <div className="mt-2.5 w-[88%] rounded-sm border border-rime-soft bg-surface-02 p-3">
              <div className="mb-1 text-[10px] font-medium text-shadow">Agent</div>
              <p className="m-0 text-[13px] leading-[1.5] text-mist">
                Got it. I&rsquo;ll use a Stripe{" "}
                <b className="font-medium text-frost">SetupIntent</b> to
                tokenize the card and store only the payment method id +
                last4/brand. Writing the ADR now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
