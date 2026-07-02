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
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MetricsTicker />
      <VideoShowcase />
      <Milestones />
      <Footer />
    </main>
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
  const [activeId, setActiveId] = useState<string>(profile.videos[0].id);
  const active = profile.videos.find((v) => v.id === activeId) ?? profile.videos[0];

  return (
    <section id="film" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Film Room
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
              Video Showcase
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="relative overflow-hidden rounded-sm border border-border bg-black">
            <video
              key={active.src}
              src={active.src}
              controls
              playsInline
              className="aspect-video w-full bg-black"
            />
            <div className="border-t border-border bg-surface p-5">
              <p className="font-display text-lg font-semibold uppercase tracking-wide">
                {active.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{active.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {profile.videos.map((v) => {
              const isActive = v.id === activeId;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveId(v.id)}
                  className={`group flex items-center justify-between rounded-sm border p-4 text-left transition ${
                    isActive
                      ? "border-accent-blue bg-accent-blue/10"
                      : "border-border bg-surface hover:border-accent-blue/50"
                  }`}
                >
                  <div>
                    <p
                      className={`font-display text-sm font-semibold uppercase tracking-wider ${
                        isActive ? "text-accent-blue" : "text-foreground"
                      }`}
                    >
                      {v.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{v.description}</p>
                  </div>
                  <Play
                    className={`h-4 w-4 flex-shrink-0 ${
                      isActive ? "text-accent-blue" : "text-muted-foreground"
                    }`}
                    fill={isActive ? "currentColor" : "none"}
                  />
                </button>
              );
            })}
          </div>
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
          <a
            href={profile.pdfUrl}
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-accent-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-accent-blue-glow"
          >
            <Download className="h-4 w-4" />
            Download Recruiter One-Sheet PDF
          </a>
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
