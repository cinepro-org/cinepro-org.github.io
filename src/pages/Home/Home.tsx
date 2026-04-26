import {
  BookOpen,
  Code2,
  Film,
  GitGraph,
  PlayCircle,
  Server,
  Tv2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <section className="container mx-auto flex flex-col items-center px-4 pb-16 text-center sm:pt-10">
        {/* Hero badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-[0.18em]">
            CinePro Streaming Ecosystem
          </span>
        </div>

        {/* Hero heading */}
        <h1 className="mb-4 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
          <span className="bg-gradient-to-r from-primary via-primary/80 to-red-500 bg-clip-text text-primary text-transparent">
            The CinePro Ecosystem
          </span>
          <span className="text-foreground text-4xl">— your open source HTTP streaming stack.</span>
        </h1>

        {/* Tagline */}
        <p className="mb-6 max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
          CinePro is an open‑source ecosystem for building your own movie & TV experience:
          OMSS‑compliant core engine, modern UI, and living documentation in one stack.
        </p>

        {/* Supporting line */}
        <p className="mb-8 max-w-2xl text-xs text-muted-foreground sm:text-sm">
          Designed for self‑hosting and homelabs — resolve dozens of sources per title, plug in your
          own UI, and stay in control of your media setup.
        </p>

        {/* CTAs */}
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <Link
              to="https://docs.cinepro.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Open Docs
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            asChild
          >
            <Link
              to="https://github.com/cinepro-org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <GitGraph className="h-4 w-4" />
              GitHub Org
            </Link>
          </Button>
        </div>

        {/* Ecosystem pills */}
        <div className="mb-14 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground sm:text-sm">
          <Button variant={'ghost'} className="border-border rounded-full hover:border-primary/50 hover:shadow-sm transition" asChild>
          <Link to={"https://github.com/omss-spec"} target={"_blank"}>
            <Server className="h-3.5 w-3.5 text-primary" />
            OMSS‑compliant core engine
          </Link>
          </Button>
          <Button variant={'ghost'} className="border-border rounded-full hover:border-primary/50 hover:shadow-sm transition" asChild>
          <Link to={"https://ui.cinepro.cc"} target={"_blank"}>
            <PlayCircle className="h-3.5 w-3.5 text-primary" />
            UI v2 at <span className="font-medium text-primary">ui.cinepro.cc</span>
          </Link>
          </Button>
          <Button variant={'ghost'} className="border-border rounded-full hover:border-primary/50 hover:shadow-sm transition" asChild>
            <Link to={"https://docs.cinepro.cc"} target={"_blank"}>
              <BookOpen className="h-3.5 w-3.5 text-primary" />
              Docs at <span className="font-medium text-primary">docs.cinepro.cc</span>
            </Link>
          </Button>
        </div>

        {/* Features grid */}
        <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-background/80 p-5 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Core engine
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Server className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold">Multi‑source scraper</h2>
            </div>
            <p className="text-xs text-muted-foreground">
              OMSS‑compliant TypeScript backend that resolves up to 100+ unique sources per movie or show.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-background/80 p-5 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Experience
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Film className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold">Modern UI & flows</h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Next‑gen React UI focused on browsing, watching, and discovery — built on a Fastify + Vite + shadcn stack.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-background/80 p-5 text-left shadow-sm transition hover:border-primary/50 hover:shadow-md">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Ecosystem
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold">Open‑source building blocks</h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Multiple repositories under <span className="font-medium text-primary">cinepro-org</span> — core, UI, docs, and more to plug into your stack.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem section */}
      <section className="border-t border-border/60 py-10 sm:py-14">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex flex-col gap-2 text-left sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-left text-xl font-semibold tracking-tight sm:text-2xl">
                Explore the CinePro project ecosystem
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                All core pieces live on GitHub under{" "}
                <span className="font-medium text-primary">cinepro-org</span> — mix and match what
                you need for your setup.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 w-full justify-center gap-2 sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/cinepro-org"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all repositories
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* core */}
            <a
              href="https://github.com/cinepro-org/core"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-border bg-background/70 p-4 text-left shadow-sm transition hover:border-primary/60 hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">core</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary">
                  TypeScript
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                OMSS‑compliant core scraping and streaming engine that powers the entire CinePro ecosystem.
              </p>
            </a>

            {/* ui */}
            <a
              href="https://github.com/cinepro-org/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-primary/40 bg-background/80 p-4 text-left shadow-sm transition hover:border-primary hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Tv2 className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">ui</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary">
                  Frontend v2
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                New CinePro frontend built with Fastify + Vite + shadcn — the future UI for{" "}
                <span className="font-medium text-primary">ui.cinepro.cc</span>.
              </p>
            </a>

            {/* docs */}
            <a
              href="https://github.com/cinepro-org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-border bg-background/70 p-4 text-left shadow-sm transition hover:border-primary/60 hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">docs</h3>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary">
                  MDX
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Mintlify‑backed documentation powering{" "}
                <span className="font-medium text-primary">docs.cinepro.cc</span> — API reference,
                guides, and deployment notes.
              </p>
            </a>
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border/60 py-10">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-base font-semibold tracking-tight sm:text-lg">
              Ready to experience CinePro for yourself?
            </h2>
            <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
              Start with the docs, pull the core, and use it for CinePro/ui or your own custom
              frontend for your setup!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="sm" asChild>
              <a
                href="https://docs.cinepro.cc/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                Quickstart
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a
                href="https://github.com/cinepro-org/core"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                Core repo
                <Server className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a
                href="https://ui.cinepro.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                CinePro/ui
                <Tv2 className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
