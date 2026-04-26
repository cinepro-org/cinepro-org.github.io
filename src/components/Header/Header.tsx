import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
    Home,
    BookOpen,
    Menu,
    LayoutPanelTop,
    GitGraph,
    Server,
    Code2,
    ChevronRight,
    ScreenShare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle as ThemeToggle } from "@/components/ui/theme-toggle"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import * as React from "react"

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [{ to: "/", label: "Home", icon: Home }]

const EXPLORE_LINKS: {
    href: string
    label: string
    description: string
    icon: React.ElementType
    external?: boolean
}[] = [
    {
        href: "https://docs.cinepro.cc",
        label: "Docs",
        description: "API reference, guides, and deployment notes.",
        icon: BookOpen,
        external: true,
    },
    {
        href: "https://ui.cinepro.cc",
        label: "CinePro UI",
        description: "Next-gen React frontend — Vite + shadcn.",
        icon: LayoutPanelTop,
        external: true,
    },
]

const GITHUB_REPOS: {
    href: string
    label: string
    description: string
    icon: React.ElementType
    badge?: string
}[] = [
    {
        href: "https://github.com/cinepro-org/core",
        label: "core",
        description: "OMSS-compliant scraping & streaming engine.",
        icon: Server,
        badge: "OMSS v1.0 Compliant",
    },
    {
        href: "https://github.com/cinepro-org/ui",
        label: "ui",
        description: "New frontend — the future of ui.cinepro.cc.",
        icon: LayoutPanelTop,
        badge: "Frontend v2",
    },
    {
        href: "https://github.com/cinepro-org/docs",
        label: "docs",
        description: "Documentation source for developers and users.",
        icon: BookOpen,
        badge: "Documentation",
    },
    {
        href: "https://github.com/cinepro-org/cinepro-org.github.io",
        label: "landing page",
        description: "The source for cinepro.cc and all marketing content.",
        icon: Code2,
        badge: "Website",
    }
]

// ─── ListItem (mirrors shadcn NavigationMenu demo pattern) ────────────────────

function ListItem({
    title,
    children,
    href,
    icon: Icon,
    badge,
    external,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & {
    href: string
    title: string
    icon?: React.ElementType
    badge?: string
    external?: boolean
}) {
    const inner = (
        <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-1.5 font-medium leading-none">
                {Icon && (
                    <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                )}
                {title}
                {badge && (
                    <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-primary">
                        {badge}
                    </span>
                )}
            </div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
    )

    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                {external ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                    >
                        {inner}
                    </a>
                ) : (
                    <Link
                        to={href}
                        className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                    >
                        {inner}
                    </Link>
                )}
            </NavigationMenuLink>
        </li>
    )
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function CineProLogo({ className }: { className?: string }) {
    return (
        <img
            src="/assets/logo/favicon.svg"
            alt="CinePro"
            width={28}
            height={28}
            className={cn("h-7 w-7 object-contain", className)}
            draggable={false}
        />
    )
}

// ─── Header ──────────────────────────────────────────────────────────────────

export default function Header({ shadow = true }: { shadow?: boolean }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path: string) =>
        path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)

    return (
        <header className="sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        "flex h-14 items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
                        shadow && "shadow-lg"
                    )}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        aria-label="CinePro home"
                        className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
                    >
                        <CineProLogo />
                        <span className="text-base font-bold tracking-tight text-foreground">
                            CinePro
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {/* Home */}
                            {NAV_LINKS.map(({ to, label, icon: Icon }) => (
                                <NavigationMenuItem key={to}>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            isActive(to) &&
                                                "bg-accent font-semibold text-accent-foreground underline underline-offset-4"
                                        )}
                                        asChild
                                    >
                                        <Link to={to} className="flex items-center gap-1.5">
                                            <Icon className="h-3.5 w-3.5" aria-hidden />
                                            {label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}

                            {/* Explore dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <ScreenShare className="mr-1.5 h-3.5 w-3.5" aria-hidden />
                                    Explore</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-80 gap-1 p-2">
                                        {EXPLORE_LINKS.map((link) => (
                                            <ListItem
                                                key={link.href}
                                                href={link.href}
                                                title={link.label}
                                                icon={link.icon}
                                                external={link.external}
                                            >
                                                {link.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* GitHub dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <GitGraph className="mr-1.5 h-3.5 w-3.5" aria-hidden />
                                    GitHub
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="p-2">
                                        <ul className="grid w-[520px] grid-cols-2 gap-1">
                                            {GITHUB_REPOS.map((repo) => (
                                                <ListItem
                                                    key={repo.href}
                                                    href={repo.href}
                                                    title={repo.label}
                                                    icon={repo.icon}
                                                    badge={repo.badge}
                                                    external
                                                >
                                                    {repo.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                        <div className="mt-2 border-t border-border pt-2">
                                            <a
                                                href="https://github.com/cinepro-org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    <GitGraph className="h-3.5 w-3.5" aria-hidden />
                                                    View all repositories on GitHub
                                                </span>
                                                <ChevronRight className="h-3 w-3" aria-hidden />
                                            </a>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right: theme toggle + mobile */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                    aria-label="Open navigation menu"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="flex w-72 flex-col gap-0 px-4 pt-6">
                                <SheetHeader className="mb-4">
                                    <SheetTitle asChild>
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2.5"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <CineProLogo />
                                            <span className="text-base font-bold tracking-tight">
                                                CinePro
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>

                                <nav className="flex flex-col gap-1 overflow-y-auto">
                                    {/* Internal */}
                                    {NAV_LINKS.map(({ to, label, icon: Icon }) => (
                                        <Link
                                            key={to}
                                            to={to}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                                isActive(to) && "bg-accent font-semibold text-accent-foreground"
                                            )}
                                        >
                                            <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                            {label}
                                        </Link>
                                    ))}

                                    {/* Separator + Explore */}
                                    <p className="mt-3 mb-1 px-3 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                                        Explore
                                    </p>
                                    {EXPLORE_LINKS.map(({ href, label, icon: Icon }) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                            {label}
                                        </a>
                                    ))}

                                    {/* Separator + GitHub */}
                                    <p className="mt-3 mb-1 px-3 text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                                        GitHub
                                    </p>
                                    {GITHUB_REPOS.map(({ href, label, icon: Icon }) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <Icon className="h-4 w-4 shrink-0" aria-hidden />
                                            {label}
                                        </a>
                                    ))}

                                    <div className="my-2 h-px bg-border" role="separator" />

                                    <a
                                        href="https://github.com/cinepro-org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <GitGraph className="h-4 w-4 shrink-0" aria-hidden />
                                        View all on GitHub
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
