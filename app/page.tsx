import Image from "next/image";

export default function LandingPage() {
  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem",
        background: "#080B11",
        color: "#E8EEF4",
      }}
    >
      <Image
        src="/branding/svg/horizontal-lockup.svg"
        alt="Yggdrasil"
        width={420}
        height={186}
        priority
        style={{ width: "min(420px, 88vw)", height: "auto" }}
      />
      <p style={{ margin: 0, color: "#9FB0C0", textAlign: "center", maxWidth: "36ch" }}>
        AI-orchestrated software development for small teams.
      </p>
    </main>
  );
}
