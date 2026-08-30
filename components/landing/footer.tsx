import { YggdrasilLogo } from "@/components/brand/yggdrasil-logo";

const LOGIN_HREF = "/app/login";

export function Footer() {
  return (
    <footer className="border-t border-rime-soft px-6 py-10">
      <div className="mx-auto flex max-w-content flex-wrap items-start justify-between gap-8">
        <div>
          <YggdrasilLogo />
          <p className="mt-2.5 max-w-[32ch] text-[13px] text-shadow">
            Secure, self-hosted AI development for small teams. Every change
            is isolated, scoped, reviewed, and tested before it ships.
          </p>
        </div>
        <div className="flex flex-wrap gap-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-shadow">
              Product
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href="#how-it-works" className="text-[13px] text-mist hover:text-frost">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="text-[13px] text-mist hover:text-frost">
                  Features
                </a>
              </li>
              <li>
                <a href={LOGIN_HREF} className="text-[13px] text-mist hover:text-frost">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-content border-t border-rime-soft pt-5 text-xs text-shadow">
        &copy; 2026 Yggdrasil.
      </p>
    </footer>
  );
}
