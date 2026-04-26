import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { GitGraph, BookOpen, LayoutPanelTop, Server, Mail, MessageSquare } from "lucide-react"
import type { JSX } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterLink {
    label: string
    url: string
    icon?: React.ElementType
}

interface FooterSection {
    title: string
    links: FooterLink[]
}

interface FooterData {
    title: string
    description: string
    sections: FooterSection[]
    warrantyDisclaimer: JSX.Element
    buttons?: Array<{ label: string; onClick: () => void }>
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function CineProLogo() {
    return (
        <img
            src="/assets/logo/favicon.svg"
            alt="CinePro"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            draggable={false}
        />
    )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
    const footerData: FooterData = {
        title: "CinePro",
        description:
            "Open-source streaming ecosystem for Movies & TV Shows. Self-host your own cinema stack.",
        sections: [
            {
                title: "GitHub",
                links: [
                    { label: "cinepro-org", url: "https://github.com/cinepro-org", icon: GitGraph },
                    { label: "core", url: "https://github.com/cinepro-org/core", icon: Server },
                    { label: "ui", url: "https://github.com/cinepro-org/ui", icon: LayoutPanelTop },
                    { label: "docs", url: "https://github.com/cinepro-org/docs", icon: BookOpen },
                ],
            },
            {
                title: "Services",
                links: [
                    { label: "docs.cinepro.cc", url: "https://docs.cinepro.cc", icon: BookOpen },
                    { label: "ui.cinepro.cc", url: "https://ui.cinepro.cc", icon: LayoutPanelTop },
                ],
            },
            {
                title: "Contact",
                links: [
                    { label: "General Inquiries", url: "mailto:contact@cinepro.cc", icon: Mail },
                    { label: "GitHub Discussions", url: "https://github.com/orgs/cinepro-org/discussions", icon: MessageSquare },
                    { label: "Legal", url: "mailto:legal@cinepro.cc", icon: Mail },
                ],
            },
        ],
        warrantyDisclaimer: (
            <>© 2025 - {new Date().getFullYear()} CinePro Foundation. All rights reserved.</>
        ),
        buttons: [
            {
                label: "Cookie Policy",
                onClick: () => toast.success("We do not use or collect any cookies 💪"),
            },
        ],
    }

    return (
        <footer className="mt-auto border-t border-border/60 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Top grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">

                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            to="/"
                            aria-label="CinePro home"
                            className="mb-3 inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <CineProLogo />
                            <span className="text-base font-bold tracking-tight text-foreground">
                                CinePro
                            </span>
                        </Link>
                        <p className="max-w-[18rem] text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            {footerData.description}
                        </p>

                        {/* GitHub org pill */}
                        <a
                            href="https://github.com/cinepro-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                        >
                            <GitGraph className="h-3.5 w-3.5" aria-hidden />
                            cinepro-org
                        </a>
                    </div>

                    {/* Link sections */}
                    {footerData.sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.url}
                                            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                                            rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                            className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                                        >
                                            {link.icon && (
                                                <link.icon
                                                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary"
                                                    aria-hidden
                                                />
                                            )}
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="my-8" />

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        {footerData.warrantyDisclaimer}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-1">
                        {footerData.buttons?.map((button) => (
                            <Button
                                key={button.label}
                                size="sm"
                                variant="ghost"
                                onClick={button.onClick}
                                className="h-7 rounded-full px-3 text-xs text-muted-foreground hover:text-foreground"
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
