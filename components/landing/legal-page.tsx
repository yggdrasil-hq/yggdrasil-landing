import { YggdrasilLogo } from "@/components/brand/yggdrasil-logo";
import { ButtonLink } from "@/components/ui/button-link";

type LegalSection = {
  title: string;
  body?: React.ReactNode;
  items?: React.ReactNode[];
};

const privacySections: LegalSection[] = [
  {
    title: "Information we collect",
    items: [
      <><b>GitHub account information.</b> When you sign in with GitHub we receive your GitHub username, display name, avatar, and the identifiers needed to authenticate you. Yggdrasil has no separate password of its own.</>,
      <><b>Repository access and metadata.</b> When you install the GitHub App on a repository, Yggdrasil receives the repository metadata and the scoped access GitHub grants it. Repository contents are checked out inside isolated, per-job environments to run builds and tests.</>,
      <><b>Project and job data.</b> The projects, feature descriptions, specifications, chat messages, job logs, and test results you create while using the service.</>,
      <><b>Secrets you store.</b> Model-provider API keys and project secrets you save are encrypted at rest and decrypted only server-side, when a job that needs them runs.</>,
      <><b>Operational data.</b> Standard service logs (timestamps, request metadata, error traces) used to keep the service running and debug failures.</>,
    ],
  },
  {
    title: "How we use it",
    body: <>We use this information solely to operate the service: authenticating you, dispatching and running agent jobs against your repositories, streaming progress back to you, deploying previews you request, and diagnosing failures. We do not sell your data, and we do not use your code or content for advertising.</>,
  },
  {
    title: "Where your code goes",
    body: <>Agent jobs run inside isolated, ephemeral environments that are torn down when the job finishes. To generate code, relevant portions of your repository and your instructions are sent to the model provider you have configured for your project (for example OpenRouter, Anthropic, or OpenAI) under your own API keys. Those providers process that data under their own terms and privacy policies — review them before connecting a provider.</>,
  },
  {
    title: "Third-party services",
    items: [
      <><b>GitHub</b> — identity, repository hosting, and pull requests. Governed by GitHub&apos;s own privacy statement.</>,
      <><b>Model providers you configure</b> — inference for agent runs, under your keys and their terms.</>,
    ],
    body: <>Yggdrasil does not embed third-party analytics or advertising trackers.</>,
  },
  {
    title: "Self-hosted deployments",
    body: <>If you run Yggdrasil on your own infrastructure, your code, secrets, and job data stay on systems you operate — this policy applies only to the hosted service. The operator of a self-hosted deployment is responsible for its own privacy practices.</>,
  },
  {
    title: "Retention and deletion",
    body: <>Project and job data is retained while your account is active so you can review the history of what was built and why. Ephemeral job environments are destroyed when a job completes. If you disconnect the GitHub App, Yggdrasil loses the access it granted. You can request deletion of your account data via the contact below.</>,
  },
  {
    title: "Security",
    body: <>Security is a design constraint of the product itself: jobs run in isolated environments with no access beyond what each job needs, repository access uses scoped and short-lived tokens rather than standing credentials, and stored secrets are encrypted at rest and decrypted only server-side. No system is perfectly secure, but the architecture is built to limit the blast radius of any single component.</>,
  },
  {
    title: "Your choices",
    items: [
      <>Uninstall the GitHub App from any repository at any time to revoke Yggdrasil&apos;s access to it.</>,
      <>Remove stored secrets and provider keys from your project settings at any time.</>,
      <>Request a copy or deletion of your account data via the contact below.</>,
    ],
  },
  {
    title: "Changes to this policy",
    body: <>We may update this policy from time to time. Material changes will be announced on this page with an updated &quot;Last updated&quot; date.</>,
  },
  {
    title: "Contact",
    body: <>Questions about privacy can be raised on <a href="https://github.com/yggdrasil-hq/yggdrasil-core">GitHub</a>.</>,
  },
];

const termsSections: LegalSection[] = [
  {
    title: "The service",
    body: <>Yggdrasil is an AI-orchestrated software development platform. You describe features in plain language; AI coding agents plan, build, test, and open pull requests against repositories you connect, running inside isolated, ephemeral environments. Yggdrasil is under active development and provided on an early-access basis — functionality may change, break, or be withdrawn without notice.</>,
  },
  {
    title: "Accounts and GitHub sign-in",
    body: <>Yggdrasil uses GitHub as its only identity provider. There is no separate Yggdrasil account or password. You are responsible for the security of your GitHub account, and for all activity that occurs under it on Yggdrasil. You must be legally capable of entering into these Terms to use the service.</>,
  },
  {
    title: "Your code and content",
    body: <>You retain all rights to the repositories, code, specifications, and other content you bring to Yggdrasil. By connecting a repository, you grant Yggdrasil the limited rights needed to operate the service on your behalf — reading and writing repository contents through the scoped, short-lived access tokens you authorize, running builds and tests against your code, and displaying results back to you. Code produced by agents in your projects belongs to you, subject to the licenses of any third-party dependencies it uses.</>,
  },
  {
    title: "Acceptable use",
    body: <>You agree not to use Yggdrasil to:</>,
    items: [
      <>build, test, or distribute malware, or software designed to harm, defraud, or gain unauthorized access to systems or data;</>,
      <>violate any applicable law, or the rights (including intellectual-property rights) of any third party;</>,
      <>connect repositories or supply credentials you are not authorized to use;</>,
      <>probe, disrupt, or circumvent the isolation, permission scoping, or other security mechanisms of the service; or</>,
      <>resell or provide the hosted service to third parties without permission.</>,
    ],
  },
  {
    title: "Your keys, your infrastructure",
    body: <>Yggdrasil lets you supply your own model-provider API keys and, where configured, run on your own infrastructure. You are responsible for those accounts — their costs, their terms, and their security. Secrets you store in Yggdrasil are encrypted at rest and decrypted only server-side, but you remain responsible for what you choose to store and for rotating credentials you believe are compromised.</>,
  },
  {
    title: "Self-hosted deployments",
    body: <>If you run Yggdrasil on your own infrastructure, these Terms apply to your use of the software; you are solely responsible for the operation, security, and compliance of your deployment and of any workloads it runs.</>,
  },
  {
    title: "Third-party services",
    body: <>Yggdrasil depends on services it does not control — GitHub for identity and repository hosting, and the model providers you configure for agent inference. Your use of those services is governed by their own terms, and Yggdrasil is not responsible for their availability, conduct, or output.</>,
  },
  {
    title: "AI-generated output",
    body: <>Agent output is generated by machine-learning models and is provided for your review. Yggdrasil&apos;s process is designed so that changes are reviewed and tested before merging, but you are responsible for the code you approve and merge. Yggdrasil does not warrant that agent-produced code is correct, secure, non-infringing, or fit for any purpose.</>,
  },
  {
    title: "Disclaimers",
    body: <>The service is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. To the maximum extent permitted by law, Yggdrasil will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, data, or goodwill, arising from your use of the service.</>,
  },
  {
    title: "Termination",
    body: <>You may stop using Yggdrasil at any time and disconnect the GitHub App from your repositories. We may suspend or terminate access to the hosted service if you materially breach these Terms or where necessary to protect the service or other users. Sections that by their nature should survive termination (including 03, 08, 09, and 11) survive it.</>,
  },
  {
    title: "Trademarks and other legal notices",
    body: <>Yggdrasil, the Yggdrasil logo, and the Yggdrasil mark are trademarks of the Yggdrasil project. You may not use them in a way that suggests affiliation or endorsement without prior written permission — this includes product names, domain names, and logos. GitHub is a trademark of GitHub, Inc. Kubernetes is a trademark of the Linux Foundation. All other trademarks are the property of their respective owners. Third-party open-source components used by Yggdrasil are licensed under their own terms.</>,
  },
  {
    title: "Changes to these Terms",
    body: <>We may update these Terms from time to time. Material changes will be announced on this page with an updated &quot;Last updated&quot; date; continued use of the service after a change takes effect constitutes acceptance.</>,
  },
  {
    title: "Contact",
    body: <>Questions about these Terms can be raised on <a href="https://github.com/yggdrasil-hq/yggdrasil-core">GitHub</a>.</>,
  },
];

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? privacySections : termsSections;
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";

  return (
    <>
      <div className="mkt-bg" aria-hidden="true">
        <div className="mkt-grain" />
      </div>
      <header className="mkt-nav">
        <div className="mkt-nav-inner">
          <a href="/" aria-label="Yggdrasil home">
            <YggdrasilLogo />
          </a>
          <div className="mkt-nav-actions">
            <ButtonLink href="/" variant="ghost">Home</ButtonLink>
            <ButtonLink href="https://app.yggdrasil.cfd">Open the app</ButtonLink>
          </div>
        </div>
      </header>
      <main className="legal">
        <div className="kicker">Legal</div>
        <h1>{title}</h1>
        <div className="updated">Last updated: September 1, 2026</div>
        <p className="intro">
          {isPrivacy
            ? "This policy explains what information Yggdrasil handles when you use the hosted service at app.yggdrasil.cfd, and the choices you have. The short version: we collect what the service needs to operate — your GitHub identity, the repositories you connect, and the jobs you run — and nothing is sold or shared for advertising."
            : 'These Terms of Service ("Terms") govern your use of Yggdrasil — the web application at app.yggdrasil.cfd, the documentation at docs.yggdrasil.cfd, and this website. By using Yggdrasil, you agree to these Terms. If you do not agree, do not use the service.'}
        </p>
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2><span className="num">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.items ? (
              <ul>
                {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
              </ul>
            ) : null}
          </section>
        ))}
        <div className="divider" />
        <p className="legal-related">
          See also the{" "}
          <a href={isPrivacy ? "/terms" : "/privacy"}>
            {isPrivacy ? "Terms of Service" : "Privacy Policy"}
          </a>
          .
        </p>
      </main>
      <footer className="mkt-footer legal-footer">
        <div className="mkt-footer-inner">
          <span>&copy; 2026 Yggdrasil. All rights reserved.</span>
          <nav>
            <a href="/">Home</a>
            <a href="https://docs.yggdrasil.cfd">Docs</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
