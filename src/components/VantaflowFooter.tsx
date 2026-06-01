import Link from "next/link"

const solutionsLinks = [
  { label: "Lead Response AI", href: "/#solutions" },
  { label: "Automated Follow-up", href: "/#solutions" },
  { label: "Appointment Routing", href: "/#solutions" },
  { label: "Cold Outreach", href: "/#solutions" },
] as const

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
] as const

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const

const TALLY_FORM_URL = "https://tally.so/r/YOUR_FORM_ID"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function VantaflowFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-zinc-400">
                Ready to improve your lead flow?
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Stop losing leads before your team replies.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Get a free automation audit and see where your lead response,
                follow-up, and appointment routing can be improved.
              </p>
            </div>

            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Get Free Audit
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Vantaflow
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              AI-powered lead capture, follow-up, and appointment routing
              systems for modern service businesses.
            </p>
          </div>

          <FooterColumn title="Solutions" links={solutionsLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            © 2026 Vantaflow. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/vantaflow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vantaflow on LinkedIn"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>

            <a
              href="https://x.com/vantaflow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vantaflow on X"
              className="text-zinc-500 transition-colors hover:text-white"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default VantaflowFooter