import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Download,
  Mail,
  MapPin,
  Phone,
  Play,
  Printer,
  Ruler,
  Target,
  Users,
  Weight,
} from "lucide-react";
import { profile } from "@/lib/rj-profile";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground print:hidden">
        <Header />
        <Hero />
        <MetricsTicker />
        <VideoShowcase />
        <Milestones />
        <Statistics />
        <Footer />
      </main>
      <PrintSheet />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-sm bg-accent-blue text-primary-foreground font-display text-lg font-bold">
            RJ
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold tracking-widest uppercase">
              Clark Jr.
            </p>
            <p className="text-xs text-muted-foreground">{profile.classYear}</p>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#metrics" className="hover:text-foreground transition">Metrics</a>
          <a href="#film" className="hover:text-foreground transition">Film</a>
          <a href="#stats" className="hover:text-foreground transition">Stats</a>
          <a href="#timeline" className="hover:text-foreground transition">Timeline</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={profile.pdfUrl}
          className="inline-flex items-center gap-2 rounded-sm bg-accent-blue px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-accent-blue-glow"
        >
          <Download className="h-3.5 w-3.5" />
          One-Sheet
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { bio } = profile;
  const bioItems = [
    { icon: Ruler, label: "Height", value: bio.height },
    { icon: Weight, label: "Weight", value: bio.weight },
    { icon: Target, label: "Positions", value: bio.positions },
    { icon: BadgeCheck, label: "Bats / Throws", value: bio.batsThrows },
    { icon: MapPin, label: "Location", value: bio.location },
    { icon: Calendar, label: "Age", value: bio.age },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Photo */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-sm bg-accent-blue/10 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-sm border border-border bg-surface">
            <img
              src={profile.heroImage}
              alt={`${profile.fullName} — ${profile.classYear} catcher and shortstop`}
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-sm border border-accent-blue/60 bg-background/70 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                {profile.classYear}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Jersey
                </p>
                <p className="stat-value text-4xl text-foreground">07</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Profile ID
                </p>
                <p className="tabular text-sm text-foreground">DR-2029-0742</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Player Profile · {profile.classYear}
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.fullName}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-10 bg-accent-blue" />
              <p className="font-display text-lg uppercase tracking-widest text-muted-foreground">
                Known as <span className="text-accent-blue">“{profile.nickname}”</span>
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {bioItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-surface p-5">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" />
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-widest">
                    {label}
                  </dt>
                </div>
                <dd className="mt-2 font-display text-xl font-semibold text-foreground tabular">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href="#film"
              className="inline-flex items-center gap-2 rounded-sm bg-accent-blue px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-accent-blue-glow"
            >
              <Play className="h-4 w-4" fill="currentColor" />
              Watch Film
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-accent-blue"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsTicker() {
  return (
    <section id="metrics" className="border-b border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-blue" />
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Verified Metrics
            </h2>
          </div>
          <span className="text-xs text-muted-foreground">Updated Jun 2026</span>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {profile.metrics.map((m) => (
            <div
              key={m.label}
              className="group relative bg-surface p-6 transition hover:bg-surface-elevated"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                {m.label}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="stat-value text-5xl text-foreground">{m.value}</span>
                <span className="font-display text-sm uppercase tracking-widest text-accent-blue">
                  {m.unit}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span className="tabular">{m.date}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-accent-blue">
                <BadgeCheck className="h-3 w-3" />
                <span className="font-medium">{m.verifiedBy}</span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const categories = profile.videoCategories;
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="film" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Film Room
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
              Video Library
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Filter by skill. Each clip includes a scouting note describing exactly what to evaluate.
            </p>
          </div>
          <div className="text-xs text-muted-foreground tabular">
            {categories.reduce((n, c) => n + c.videos.length, 0)} clips ·{" "}
            {categories.length} categories
          </div>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Video categories"
          className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4"
        >
          {categories.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(c.id)}
                className={`rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest transition ${
                  isActive
                    ? "border-accent-blue bg-accent-blue text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-accent-blue/60 hover:text-foreground"
                }`}
              >
                {c.label}
                <span className="ml-2 tabular text-[0.65rem] opacity-70">
                  {c.videos.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active category */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
            {active.label}
          </h3>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">{active.blurb}</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {active.videos.map((v, i) => (
            <div
              key={`${active.id}-${i}`}
              className="overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="relative bg-black">
                <video
                  key={v.src + i}
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-black"
                />
              </div>
              <div className="border-t border-border p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-base font-semibold uppercase tracking-wide">
                    {v.title}
                  </p>
                  <span className="shrink-0 rounded-sm border border-border px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-widest text-muted-foreground tabular">
                    {v.date}
                  </span>
                </div>
                <div className="mt-3 flex items-start gap-2 rounded-sm border border-accent-blue/30 bg-accent-blue/5 p-3">
                  <Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent-blue">
                      Scout Evaluates
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {v.evaluating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  return (
    <section id="timeline" className="border-b border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
            Career Track
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
            Milestones
          </h2>
        </div>

        <ol className="relative space-y-8 border-l border-border pl-8">
          {profile.milestones.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-accent-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              </span>
              <div className="rounded-sm border border-border bg-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent-blue tabular">
                    {m.date}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Statistics() {
  type Row = {
    name: string; dates: string; team: string;
    gp: number; pa: number; ab: number; h: number;
    doubles: number; triples: number; hr: number; rbi: number; bb: number; k: number;
  };
  const fmtAvg = (n: number) =>
    (Number.isFinite(n) ? n : 0).toFixed(3).replace(/^0\./, ".");
  const calc = (t: Row) => {
    const singles = t.h - t.doubles - t.triples - t.hr;
    const tb = singles + 2 * t.doubles + 3 * t.triples + 4 * t.hr;
    const avg = t.ab ? t.h / t.ab : 0;
    const obpDen = t.ab + t.bb; // simplified (no HBP/SF tracked)
    const obp = obpDen ? (t.h + t.bb) / obpDen : 0;
    const slg = t.ab ? tb / t.ab : 0;
    return { avg, obp, slg, ops: obp + slg };
  };

  const totals = profile.tournaments.reduce(
    (a, t) => ({
      gp: a.gp + t.gp, pa: a.pa + t.pa, ab: a.ab + t.ab, h: a.h + t.h,
      doubles: a.doubles + t.doubles, triples: a.triples + t.triples,
      hr: a.hr + t.hr, rbi: a.rbi + t.rbi, bb: a.bb + t.bb, k: a.k + t.k,
    }),
    { gp: 0, pa: 0, ab: 0, h: 0, doubles: 0, triples: 0, hr: 0, rbi: 0, bb: 0, k: 0 },
  );
  const tTotals = calc({ ...totals, name: "", dates: "", team: "" } as Row);

  const headers: Array<{ key: string; label: string; align?: "left"; sticky?: boolean }> = [
    { key: "name", label: "Tournament", align: "left", sticky: true },
    { key: "dates", label: "Dates", align: "left" },
    { key: "team", label: "Team", align: "left" },
    { key: "gp", label: "GP" },
    { key: "pa", label: "PA" },
    { key: "ab", label: "AB" },
    { key: "h", label: "H" },
    { key: "doubles", label: "2B" },
    { key: "triples", label: "3B" },
    { key: "hr", label: "HR" },
    { key: "rbi", label: "RBI" },
    { key: "bb", label: "BB" },
    { key: "k", label: "SO" },
    { key: "avg", label: "AVG" },
    { key: "obp", label: "OBP" },
    { key: "slg", label: "SLG" },
    { key: "ops", label: "OPS" },
  ];

  return (
    <section id="stats" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
              By The Numbers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
              Tournament Statistics
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Full offensive splits by tournament. Scroll horizontally to view every column.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-border bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-sm tabular">
              <thead>
                <tr className="border-b border-border bg-surface-elevated text-left">
                  {headers.map((h) => (
                    <th
                      key={h.key}
                      className={`whitespace-nowrap px-4 py-3 font-display text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground ${
                        h.align === "left" ? "text-left" : "text-right"
                      } ${h.sticky ? "sticky left-0 z-10 bg-surface-elevated" : ""}`}
                    >
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {profile.tournaments.map((t, i) => {
                  const c = calc(t);
                  const cells: Array<{ k: string; v: string; num?: boolean }> = [
                    { k: "name", v: t.name },
                    { k: "dates", v: t.dates },
                    { k: "team", v: t.team },
                    { k: "gp", v: String(t.gp), num: true },
                    { k: "pa", v: String(t.pa), num: true },
                    { k: "ab", v: String(t.ab), num: true },
                    { k: "h", v: String(t.h), num: true },
                    { k: "doubles", v: String(t.doubles), num: true },
                    { k: "triples", v: String(t.triples), num: true },
                    { k: "hr", v: String(t.hr), num: true },
                    { k: "rbi", v: String(t.rbi), num: true },
                    { k: "bb", v: String(t.bb), num: true },
                    { k: "k", v: String(t.k), num: true },
                    { k: "avg", v: fmtAvg(c.avg), num: true },
                    { k: "obp", v: fmtAvg(c.obp), num: true },
                    { k: "slg", v: fmtAvg(c.slg), num: true },
                    { k: "ops", v: fmtAvg(c.ops), num: true },
                  ];
                  return (
                    <tr
                      key={i}
                      className="border-b border-border/60 transition hover:bg-surface-elevated/60"
                    >
                      {cells.map((cell, idx) => (
                        <td
                          key={cell.k}
                          className={`whitespace-nowrap px-4 py-3 ${
                            cell.num ? "text-right" : "text-left"
                          } ${idx === 0 ? "sticky left-0 z-10 bg-surface font-display text-sm font-semibold uppercase tracking-wide" : ""} ${
                            cell.k === "ops" ? "font-semibold text-accent-blue" : "text-foreground"
                          }`}
                        >
                          {cell.v}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-accent-blue/40 bg-surface-elevated">
                  <td className="sticky left-0 z-10 whitespace-nowrap bg-surface-elevated px-4 py-3 font-display text-xs font-bold uppercase tracking-widest text-accent-blue">
                    Totals
                  </td>
                  <td className="px-4 py-3" />
                  <td className="px-4 py-3" />
                  {[totals.gp, totals.pa, totals.ab, totals.h, totals.doubles, totals.triples, totals.hr, totals.rbi, totals.bb, totals.k].map((n, i) => (
                    <td key={i} className="whitespace-nowrap px-4 py-3 text-right font-semibold text-foreground">
                      {n}
                    </td>
                  ))}
                  <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-foreground">{fmtAvg(tTotals.avg)}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-foreground">{fmtAvg(tTotals.obp)}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-foreground">{fmtAvg(tTotals.slg)}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right font-bold text-accent-blue">{fmtAvg(tTotals.ops)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground sm:hidden">
          Tip: swipe left/right on the table to see all columns.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const { parent, coach } = profile.contacts;
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--accent-blue) 25%, transparent) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
            Recruiters
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Take RJ's full profile with you.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            A single-page PDF with verified metrics, positional notes, academic summary, and film links.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-3 rounded-sm bg-accent-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-accent-blue-glow"
            >
              <Download className="h-4 w-4" />
              Download Recruiter One-Sheet PDF
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-4 font-display text-xs font-semibold uppercase tracking-widest text-foreground transition hover:border-accent-blue"
            >
              <Printer className="h-3.5 w-3.5" />
              Print Preview
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {[parent, coach].map((c) => (
            <div key={c.role} className="bg-surface p-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest">
                  {c.role}
                </p>
              </div>
              <p className="mt-3 font-display text-xl font-semibold uppercase tracking-wide">
                {c.name}
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={`tel:${c.phone}`}
                  className="flex items-center gap-3 text-muted-foreground transition hover:text-accent-blue"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span className="tabular">{c.phone}</span>
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition hover:text-accent-blue"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{c.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} RJ Clark Jr. · {profile.classYear}
        </p>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------------------
 * PRINT SHEET
 * Hidden on screen. On print (or "Save as PDF"), this is the ONLY thing
 * that renders — a clean, single-page, black-and-white athletic resume.
 * -------------------------------------------------------------------- */
function PrintSheet() {
  const { bio, contacts, metrics } = profile;
  const liveUrl = typeof window !== "undefined" ? window.location.href : "https://rjclark.example";
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data=${encodeURIComponent(
    liveUrl,
  )}`;

  return (
    <div
      className="print-sheet hidden print:block"
      style={{
        color: "#000",
        background: "#fff",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: "10pt",
        lineHeight: 1.35,
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderBottom: "2px solid #000",
          paddingBottom: "8pt",
          marginBottom: "12pt",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "8pt",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Recruiter One-Sheet · {profile.classYear}
          </p>
          <h1
            style={{
              fontFamily: "'Oswald', 'Inter', sans-serif",
              fontSize: "26pt",
              fontWeight: 700,
              textTransform: "uppercase",
              margin: "4pt 0 0",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            {profile.fullName}
          </h1>
          <p
            style={{
              fontSize: "10pt",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              margin: "4pt 0 0",
            }}
          >
            “{profile.nickname}” · {bio.positions}
          </p>
        </div>
        <div style={{ textAlign: "right", fontSize: "8pt" }}>
          <p style={{ margin: 0, fontWeight: 600 }}>Profile ID</p>
          <p style={{ margin: 0, fontVariantNumeric: "tabular-nums" }}>DR-2029-0742</p>
          <p style={{ margin: "6pt 0 0", fontWeight: 600 }}>Generated</p>
          <p style={{ margin: 0, fontVariantNumeric: "tabular-nums" }}>
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </header>

      {/* BODY: photo + bio */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.4in 1fr",
          gap: "14pt",
          marginBottom: "12pt",
        }}
      >
        <img
          src={profile.heroImage}
          alt={profile.fullName}
          style={{
            width: "1.4in",
            height: "1.75in",
            objectFit: "cover",
            border: "1px solid #000",
            filter: "grayscale(100%) contrast(1.05)",
          }}
        />
        <div>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "9pt",
              fontVariantNumeric: "tabular-nums lining-nums",
            }}
          >
            <tbody>
              {[
                ["Height", bio.height],
                ["Weight", bio.weight],
                ["Positions", bio.positions],
                ["Bats / Throws", bio.batsThrows],
                ["Location", bio.location],
                ["Age", bio.age],
              ].map(([k, v]) => (
                <tr key={k} style={{ borderBottom: "1px solid #999" }}>
                  <td
                    style={{
                      padding: "4pt 8pt 4pt 0",
                      fontSize: "7.5pt",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                      width: "35%",
                    }}
                  >
                    {k}
                  </td>
                  <td style={{ padding: "4pt 0", fontWeight: 500 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* METRICS */}
      <section style={{ marginBottom: "12pt" }}>
        <h2
          style={{
            fontFamily: "'Oswald', 'Inter', sans-serif",
            fontSize: "10pt",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            borderBottom: "1px solid #000",
            paddingBottom: "3pt",
            margin: "0 0 8pt",
          }}
        >
          Verified Metrics
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
            gap: "8pt",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                border: "1px solid #000",
                padding: "8pt",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "7pt",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  margin: "4pt 0 0",
                  fontFamily: "'Oswald', 'Inter', sans-serif",
                  fontSize: "22pt",
                  fontWeight: 700,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums lining-nums",
                }}
              >
                {m.value}
                <span style={{ fontSize: "10pt", marginLeft: "4pt" }}>{m.unit}</span>
              </p>
              <p style={{ margin: "4pt 0 0", fontSize: "7.5pt" }}>{m.date}</p>
              <p style={{ margin: "1pt 0 0", fontSize: "7.5pt", fontStyle: "italic" }}>
                {m.verifiedBy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: coach + QR */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1in",
          gap: "14pt",
          borderTop: "2px solid #000",
          paddingTop: "8pt",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Oswald', 'Inter', sans-serif",
              fontSize: "9pt",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              margin: "0 0 6pt",
            }}
          >
            Primary Coach Contact
          </h2>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "11pt" }}>
            {contacts.coach.name}
          </p>
          <p style={{ margin: "1pt 0 0", fontSize: "9pt" }}>{contacts.coach.role}</p>
          <p style={{ margin: "4pt 0 0", fontSize: "9pt", fontVariantNumeric: "tabular-nums" }}>
            {contacts.coach.phone} · {contacts.coach.email}
          </p>

          <h2
            style={{
              fontFamily: "'Oswald', 'Inter', sans-serif",
              fontSize: "9pt",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              margin: "10pt 0 6pt",
            }}
          >
            Parent / Guardian
          </h2>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "10pt" }}>
            {contacts.parent.name}
          </p>
          <p style={{ margin: "1pt 0 0", fontSize: "9pt", fontVariantNumeric: "tabular-nums" }}>
            {contacts.parent.phone} · {contacts.parent.email}
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={qrSrc}
            alt="QR code linking to live profile"
            width={90}
            height={90}
            style={{
              width: "1in",
              height: "1in",
              border: "1px solid #000",
              display: "block",
            }}
            onError={(e) => {
              // If offline, hide the img and rely on the placeholder box
              (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
            }}
          />
          <p
            style={{
              margin: "4pt 0 0",
              fontSize: "6.5pt",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            Scan for Live Profile
          </p>
        </div>
      </section>
    </div>
  );
}
