import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blobs min-h-screen">
      {/* NAV */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-base font-medium tracking-wide text-white/90">
          ERIC HERNÁNDEZ
        </div>

        <nav className="hidden items-center gap-8 text-base text-white/70 md:flex">
          <Link href="/" className="text-white transition hover:text-white">
            HOME
          </Link>
          <Link href="#about" className="transition hover:text-white">
            ABOUT
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            PROJECTS
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            CONTACT
          </Link>
        </nav>

        {/* Mobile simple */}
        <div className="md:hidden text-sm text-white/60">MENU</div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-8 md:flex-row md:items-center md:gap-16 md:pt-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-base font-medium uppercase tracking-[0.2em] text-purple-300/90">
            AI Builder · Project Manager · Scrum Master
          </p>

          <h1 className="mb-2 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Eric Hernández
          </h1>

          <p className="mb-6 text-xl text-purple-200/80 sm:text-2xl">
            Brand Manager · Community Manager
          </p>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
            Results-driven professional specializing in digital transformation,
            talent technology platforms and applied AI. I turn complex
            initiatives into measurable outcomes.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Link
              href="#projects"
              className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white"
            >
              VIEW MY WORK
            </Link>

            <Link
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium text-white/90"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Right photo */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-900/40">
            <Image
              src="/24.png"
              alt="Eric Hernández – Professional portrait"
              width={380}
              height={460}
              className="h-auto w-[280px] object-cover sm:w-[320px] md:w-[360px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT + METRICS */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-white/70">
              I am a results-driven professional with deep experience leading
              cross-functional teams and delivering complex digital and talent
              technology initiatives. I excel in project management, process
              optimization, stakeholder alignment and applied AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card rounded-xl p-5">
              <div className="text-3xl font-bold text-purple-300">+2,000</div>
              <div className="mt-1 text-sm text-white/60">
                Administrative collaborators reached via AI platform
                configurations
              </div>
            </div>

            <div className="card rounded-xl p-5">
              <div className="text-3xl font-bold text-purple-300">+80</div>
              <div className="mt-1 text-sm text-white/60">
                Projects managed yearly
              </div>
            </div>

            <div className="card rounded-xl p-5">
              <div className="text-3xl font-bold text-purple-300">+$3M</div>
              <div className="mt-1 text-sm text-white/60">
                USD CAPEX overseen in Asset Security
              </div>
            </div>

            <div className="card rounded-xl p-5">
              <div className="text-3xl font-bold text-purple-300">Impact</div>
              <div className="mt-1 text-sm text-white/60">
                Tax & pricing optimizations with measurable results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-semibold text-white">
          Featured Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="card group overflow-hidden rounded-2xl">
            <div className="h-36 bg-gradient-to-br from-purple-600/40 to-indigo-600/30" />

            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">
                AI Configuration for Talent Acquisition
              </h3>

              <p className="text-base leading-relaxed text-white/60">
                Designed and enabled AI-driven configurations for talent
                acquisition platforms, expanding reach and operational
                efficiency for administrative collaborators.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card group overflow-hidden rounded-2xl">
            <div className="h-36 bg-gradient-to-br from-pink-600/40 to-purple-600/30" />

            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Enchanté Persianas
              </h3>

              <p className="text-base leading-relaxed text-white/60">
                Brand & Community Manager: full branding and marketing strategy,
                lead management and social media operations for the brand.
              </p>
            </div>
          </div>

          {/* Placeholder project */}
          <div className="card group overflow-hidden rounded-2xl opacity-70">
            <div className="h-36 bg-gradient-to-br from-indigo-600/30 to-slate-700/40" />

            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-white">
                More projects coming
              </h3>

              <p className="text-base leading-relaxed text-white/60">
                Additional case studies will be added here. Keep structure
                clean and results-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-24">
        <div className="card rounded-2xl p-8 text-center md:p-12">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Let’s work together
          </h2>

          <p className="mb-8 text-lg text-white/70">
            Open to collaborations, consulting and project leadership roles.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:erichernandezingeniero@gmail.com"
              className="btn-primary rounded-full px-8 py-3.5 text-base font-semibold text-white"
            >
              erichernandezingeniero@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/pmerichdz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-full px-8 py-3.5 text-base font-medium text-white/90"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/erichernandezpmos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-full px-8 py-3.5 text-base font-medium text-white/90"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Eric Hernández · Professional Hub · Built
        for growth
      </footer>
    </div>
  );
}