import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Yggdrasil",
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
