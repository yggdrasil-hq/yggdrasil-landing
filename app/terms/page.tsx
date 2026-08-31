import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Yggdrasil",
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}
