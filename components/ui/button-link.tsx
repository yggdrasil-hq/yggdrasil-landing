import Link from "next/link";
import type { ComponentProps } from "react";

// Reproduces design/shared/tokens.css's .btn/.btn-primary/.btn-outline/
// .btn-ghost/.btn-lg classes as Tailwind utility variants, since landing has
// no build step that can load that CSS file directly.
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors";

const variants = {
  primary: "bg-bifrost text-niflheim hover:bg-bifrost/90",
  outline: "bg-surface-02 border border-rime text-frost hover:border-bifrost",
  ghost: "bg-transparent text-mist hover:text-frost",
} as const;

const sizes = {
  default: "h-[38px] px-4",
  lg: "h-12 px-6 text-[15px]",
} as const;

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...props}
    />
  );
}
