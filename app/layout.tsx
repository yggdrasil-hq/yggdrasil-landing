import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yggdrasil",
  description: "AI-orchestrated software development for small teams",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/branding/app-tile.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/branding/app-tile.png",
    shortcut: "/favicon.ico",
  },
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
