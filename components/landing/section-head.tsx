export function SectionHead({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-[620px] text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-bifrost">
        {kicker}
      </div>
      <h2 className="mt-2.5 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-[-0.02em] text-frost">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-[1.55] text-mist">{body}</p>
    </div>
  );
}
