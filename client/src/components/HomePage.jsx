import ThemeToggle from "./common/ThemeToggle";
import BrandLockup from "./common/BrandLockup";

function HomePage({ onGetStarted }) {
  return (
    <main className="lq-pattern min-h-screen bg-[var(--lq-bg)] text-[var(--lq-text)] transition-colors duration-300">

      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--lq-primary)] opacity-[0.06] blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[var(--lq-purple)] opacity-[0.05] blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[var(--lq-border)] bg-[var(--lq-bg)]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <BrandLockup />

          <div className="flex items-center gap-3">

            <span className="hidden font-mono text-[9px] uppercase tracking-wider text-[var(--lq-text-muted)] md:block">
              PostgreSQL · SQLite
            </span>

            <ThemeToggle />

            <button
              type="button"
              onClick={onGetStarted}
              className="rounded-md border border-[var(--lq-primary)] bg-[var(--lq-primary)] px-4 py-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[var(--lq-primary-hover)]"
            >
              Get Started
            </button>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">

          {/* LEFT */}
          <div className="relative z-10">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--lq-border)] bg-[var(--lq-surface)] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[var(--lq-text-soft)] shadow-sm">

              <span className="h-2 w-2 rounded-full bg-[var(--lq-success)] shadow-sm" />

              Local-first AI database assistant

            </div>

            <h1 className="max-w-3xl font-mono text-5xl font-bold leading-[1.05] tracking-tight text-[var(--lq-text)] sm:text-6xl lg:text-7xl">

              Talk to your

              <span className="block text-[var(--lq-primary)]">
                database.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--lq-text-soft)]">
              Ask questions in natural language. Let AI generate
              SQL, review the query, and execute it against your
              database with confidence.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">

              <button
                type="button"
                onClick={onGetStarted}
                className="rounded-md border border-[var(--lq-primary)] bg-[var(--lq-primary)] px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[var(--lq-primary-hover)] hover:shadow-lg"
              >
                Connect Database →
              </button>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="rounded-md border border-[var(--lq-border)] bg-[var(--lq-surface)] px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--lq-text-soft)] transition hover:border-[var(--lq-primary)] hover:text-[var(--lq-primary)]"
              >
                Learn More ↓
              </button>

            </div>

            {/* FEATURES */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">

              <Feature
                number="01"
                title="CONNECT"
                text="Your database"
              />

              <Feature
                number="02"
                title="ASK"
                text="Natural language"
              />

              <Feature
                number="03"
                title="EXECUTE"
                text="Real results"
              />

            </div>

          </div>

          {/* RIGHT — THEMED TERMINAL */}
          <div className="relative">

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -inset-8 rounded-full border border-[var(--lq-primary)] opacity-[0.07]" />
            <div className="pointer-events-none absolute -inset-16 rounded-full border border-[var(--lq-purple)] opacity-[0.05]" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--lq-border)] bg-[var(--lq-surface)] shadow-2xl">

              {/* Japanese-inspired top decoration */}
              <div className="flex items-center justify-between border-b border-[var(--lq-border)] bg-[var(--lq-surface-soft)] px-4 py-3">

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c94a55]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--lq-gold)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--lq-success)]" />
                </div>

                <span className="font-mono text-[9px] text-[var(--lq-text-muted)]">
                  queryflow.workspace
                </span>

              </div>

              {/* Question */}
              <div className="border-b border-[var(--lq-border)] p-5">

                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--lq-text-muted)]">
                  Natural Language
                </div>

                <div className="mt-3 rounded-lg border border-[var(--lq-border)] bg-[var(--lq-bg)] p-4 font-mono text-sm text-[var(--lq-text)]">
                  Show the 5 highest paid employees
                </div>

              </div>

              {/* SQL */}
              <div className="p-5">

                <div className="mb-3 flex items-center justify-between">

                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--lq-text-muted)]">
                    Generated SQL
                  </span>

                  <span className="rounded border border-[var(--lq-success)] bg-[var(--lq-bg-soft)] px-2 py-1 font-mono text-[8px] text-[var(--lq-success)]">
                    VALID SQL
                  </span>

                </div>

                <pre className="overflow-x-auto rounded-lg border border-[var(--lq-border)] bg-[#171417] p-5 font-mono text-xs leading-6 text-[#eee6df]">
<span className="text-[#d16b7a]">SELECT</span>{" "}
<span className="text-[#e5c27b]">name</span>,{" "}
<span className="text-[#e5c27b]">salary</span>
{"\n"}
<span className="text-[#d16b7a]">FROM</span>{" "}
<span className="text-[#e5c27b]">employees</span>
{"\n"}
<span className="text-[#d16b7a]">ORDER BY</span>{" "}
<span className="text-[#e5c27b]">salary</span>{" "}
<span className="text-[#d16b7a]">DESC</span>
{"\n"}
<span className="text-[#d16b7a]">LIMIT</span>{" "}
<span className="text-[#e5c27b]">5</span>;
                </pre>

                <div className="mt-4 flex items-center justify-between">

                  <span className="font-mono text-[9px] text-[var(--lq-text-muted)]">
                    AI generated · Ready to execute
                  </span>

                  <button
                    type="button"
                    onClick={onGetStarted}
                    className="rounded-md bg-[var(--lq-primary)] px-4 py-2 font-mono text-[9px] font-semibold text-white transition hover:bg-[var(--lq-primary-hover)]"
                  >
                    Try QueryFlow
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-t border-[var(--lq-border)] bg-[var(--lq-bg-soft)] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[var(--lq-primary)]">
              HOW QUERYFLOW WORKS
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--lq-text)] sm:text-4xl md:text-5xl">
              From question to SQL
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--lq-text-soft)]">
              Connect your database, ask questions in natural language, review the generated SQL, and execute it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <HowItWorksCard
              number="01"
              title="Connect"
              text="Provide your database type and connection URL."
              icon="database"
            />
            <HowItWorksCard
              number="02"
              title="Ask"
              text="Describe what you need in natural language."
              icon="chat"
            />
            <HowItWorksCard
              number="03"
              title="Review & Execute"
              text="Review the generated SQL and execute it against your database."
              icon="run"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--lq-border)] bg-[var(--lq-surface)] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--lq-border)] bg-[var(--lq-bg-soft)] text-[var(--lq-primary)]">
              <ShieldCheckIcon />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--lq-text)]">
                Review before execution
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-[var(--lq-text-soft)]">
                Generated SQL is shown before execution. QueryFlow only allows read-only SELECT queries.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function Feature({ number, title, text }) {
  return (
    <div className="rounded-xl border border-[var(--lq-border)] bg-[var(--lq-surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--lq-primary)]">

      <div className="font-mono text-[8px] text-[var(--lq-primary)]">
        {number}
      </div>

      <div className="mt-2 font-mono text-[9px] font-semibold tracking-wider text-[var(--lq-text)]">
        {title}
      </div>

      <div className="mt-1 text-[10px] text-[var(--lq-text-muted)]">
        {text}
      </div>

    </div>
  );
}

function HowItWorksCard({ number, title, text }) {
  return (
    <article className="group rounded-2xl border border-[var(--lq-border)] bg-[var(--lq-surface)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--lq-primary)] hover:shadow-md sm:p-7">
      <div className="flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--lq-primary-soft)] text-[var(--lq-primary)]">
          {iconForStep(title)}
        </div>
        <span className="font-mono text-sm font-medium tracking-widest text-[var(--lq-primary)]">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-lg font-semibold capitalize tracking-tight text-[var(--lq-text)]">
        {title}
      </h3>

      <p className="mt-2.5 text-sm leading-6 text-[var(--lq-text-soft)]">
        {text}
      </p>
    </article>
  );
}

function iconForStep(title) {
  if (title === "Connect") return <DatabaseIcon />;
  if (title === "Ask") return <ChatIcon />;
  return <PlayCheckIcon />;
}

function DatabaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
      <circle cx="8" cy="11.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="11.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="17" cy="11.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PlayCheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 3 12 9-12 9V3Z" />
      <path d="m14 18 2.2 2.2L21 15.5" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default HomePage;
