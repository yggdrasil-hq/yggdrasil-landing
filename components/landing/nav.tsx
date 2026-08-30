import Link from "next/link";
import { YggdrasilLogo } from "@/components/brand/yggdrasil-logo";
import { ButtonLink } from "@/components/ui/button-link";

// The Web app is served at /app on the same origin (docs/conventions/deploy.md's
// path table) — a relative path works whether we're on localhost or prod.
const LOGIN_HREF = "/app/login";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rime-soft bg-niflheim/[0.82] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4">
        <Link href="/" aria-label="Yggdrasil home">
          <YggdrasilLogo />
        </Link>
        <nav className="hidden items-center gap-7 sm:flex">
          <a href="#how-it-works" className="text-sm text-mist hover:text-frost">
            How it works
          </a>
          <a href="#features" className="text-sm text-mist hover:text-frost">
            Features
          </a>
        </nav>
        <div className="flex items-center gap-2.5">
          <ButtonLink href={LOGIN_HREF} variant="ghost">
            Sign in
          </ButtonLink>
          <ButtonLink href={LOGIN_HREF} variant="primary">
            Get started
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
