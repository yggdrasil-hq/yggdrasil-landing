import { ButtonLink } from "@/components/ui/button-link";

const LOGIN_HREF = "/app/login";

export function CtaBand() {
  return (
    <section className="border-t border-rime-soft px-6 py-[clamp(64px,9vw,100px)] text-center">
      <h2 className="mx-auto max-w-[18ch] text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.025em] text-frost">
        Ready to ship AI-built code you can trust?
      </h2>
      <p className="mt-3 text-[15px] text-mist">
        Sign in with GitHub — no separate account to create.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href={LOGIN_HREF} variant="primary" size="lg">
          Continue with GitHub
        </ButtonLink>
      </div>
    </section>
  );
}
