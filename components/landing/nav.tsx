import { YggdrasilLogo } from "@/components/brand/yggdrasil-logo";
import { ButtonLink } from "@/components/ui/button-link";

const APP_HREF = "https://app.yggdrasil.cfd";

export function Nav() {
  return (
    <header className="mkt-nav">
      <div className="mkt-nav-inner">
        <a href="/" aria-label="Yggdrasil home">
          <YggdrasilLogo />
        </a>
        <nav className="mkt-nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="https://docs.yggdrasil.cfd">Docs</a>
          <a href="https://github.com/yggdrasil-hq/yggdrasil-core">GitHub</a>
        </nav>
        <div className="mkt-nav-actions">
          <ButtonLink href={APP_HREF} variant="ghost">
            Sign in
          </ButtonLink>
          <ButtonLink href={APP_HREF} variant="primary">
            Get started
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
