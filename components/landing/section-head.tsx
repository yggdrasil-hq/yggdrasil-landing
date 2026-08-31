import { Reveal } from "@/components/landing/reveal";

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
    <Reveal className="mkt-section-head">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </Reveal>
  );
}
