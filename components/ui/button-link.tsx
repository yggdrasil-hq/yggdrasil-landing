import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
} as const;

const sizes = {
  default: "",
  lg: "btn-lg",
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
      className={`btn ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
      {...props}
    />
  );
}
