import { ArrowRight, Code2, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <GraduationCap className="h-4 w-4" />
              B.Tech Student Portfolio
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Building real‑world solutions with clean code and curiosity
            </h1>
            <p className="mt-4 max-w-prose text-gray-600">
              I'm a final year engineering student focused on modern web development, data structures, and problem
              solving. I love turning ideas into fast, accessible experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white shadow hover:bg-black/90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 rounded-md border px-3 py-1">
                <Code2 className="h-4 w-4 text-indigo-600" /> React
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border px-3 py-1">
                <Code2 className="h-4 w-4 text-indigo-600" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border px-3 py-1">
                <Code2 className="h-4 w-4 text-indigo-600" /> Node.js
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border px-3 py-1">
                <Code2 className="h-4 w-4 text-indigo-600" /> DSA
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-100 to-violet-100 blur-2xl" />
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-md border bg-gray-50">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <span className="text-sm">Code Preview</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border p-3">
                  <p className="font-semibold text-gray-900">LeetCode</p>
                  <p className="mt-1 text-gray-600">450+ problems solved</p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="font-semibold text-gray-900">Hackathons</p>
                  <p className="mt-1 text-gray-600">3 wins + campus events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
