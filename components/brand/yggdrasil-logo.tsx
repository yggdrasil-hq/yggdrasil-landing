// Mirrors web/components/brand/yggdrasil-logo.tsx (design/shared/shell.css's
// .logo/.mark/.gg/.drasil primitives), reproduced independently here since
// landing/ is a separate repo/build with no shared package to import from.
export function YggdrasilLogo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap text-lg font-semibold tracking-[-0.03em] ${className ?? ""}`}
    >
      <span className="-mr-[0.09em] font-display text-[1.32em] font-bold tracking-[-0.05em] text-bifrost">
        Y
      </span>
      <span className="text-bifrost">gg</span>
      <span className="text-frost">drasil</span>
    </span>
  );
}
