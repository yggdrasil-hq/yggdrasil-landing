import { YggdrasilLogo } from "@/components/brand/yggdrasil-logo";

export function Footer() {
  return (
    <footer className="mkt-footer">
      <div className="mkt-footer-inner">
        <div className="mkt-footer-brand">
          <YggdrasilLogo />
          <p>
            Secure, self-hosted AI development for small teams. Every change is
            isolated, scoped, reviewed, and tested before it ships.
          </p>
        </div>
        <div className="mkt-footer-cols">
          <div className="mkt-footer-col">
            <div className="heading">Product</div>
            <ul>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="https://app.yggdrasil.cfd">Open the app</a></li>
            </ul>
          </div>
          <div className="mkt-footer-col">
            <div className="heading">Resources</div>
            <ul>
              <li><a href="https://docs.yggdrasil.cfd">Documentation</a></li>
              <li><a href="https://github.com/yggdrasil-hq/yggdrasil-core">GitHub</a></li>
            </ul>
          </div>
          <div className="mkt-footer-col">
            <div className="heading">Legal</div>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mkt-footer-bottom">
        <span>
          &copy; 2026 Yggdrasil. All rights reserved. Yggdrasil and the
          Yggdrasil mark are trademarks of the Yggdrasil project.
        </span>
        <span className="mono">Secure, self-hosted AI development</span>
      </div>
    </footer>
  );
}
