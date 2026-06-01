import Link from "next/link"
import { CheckCircle2, ArrowLeft, Mail, Workflow } from "lucide-react"

export const metadata = {
  title: "Request Received | Vantaflow",
  description:
    "Your Vantaflow automation check request has been received.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 sm:p-10">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <p className="text-sm font-medium text-zinc-400">
            Automation Check submitted
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Request received.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Thanks for filling out the Vantaflow Automation Check. We’ll review
            your current lead flow and look for simple ways to automate your
            response, follow-up, appointment routing, or lead tracking.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <Workflow className="mb-4 h-5 w-5 text-zinc-300" />
              <h2 className="text-sm font-semibold text-white">
                What happens next
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                We review your workflow, identify bottlenecks, and outline where
                automation can make the biggest difference.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <Mail className="mb-4 h-5 w-5 text-zinc-300" />
              <h2 className="text-sm font-semibold text-white">
                No sales call required
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                We’ll keep the process async and send practical recommendations
                based on the details you submitted.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to homepage
            </Link>

            <Link
              href="/#solutions"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
            >
              View solutions
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-zinc-500">
            Tip: If you forgot to include something important, you can submit the
            form again with extra details.
          </p>
        </div>
      </div>
    </main>
  )
}