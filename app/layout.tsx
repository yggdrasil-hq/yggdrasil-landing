import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yggdrasil",
  description: "AI-orchestrated software development for small teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
