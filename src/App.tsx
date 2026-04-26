import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home/Home.tsx"
import NotFound from "@/pages/404/NotFound.tsx"
import { Toaster } from "@/components/ui/sonner.tsx"
import Footer from "@/components/Footer/Footer.tsx"
import Header from "@/components/Header/Header"

function App() {
    return (
        <BrowserRouter>
            <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full w-full animate-pulse"
                        style={{ animationDuration: "20s" }}
                    >
                        <div className="absolute -top-48 -left-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full bg-primary/60 blur-[128px]" />
                        <div className="absolute -top-32 -left-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full bg-primary/20 blur-[96px]" />
                        <div className="absolute -top-16 -left-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full bg-primary/10 blur-[64px]" />
                    </div>

                    <div
                        className="absolute right-0 bottom-0 h-full w-full animate-pulse"
                        style={{ animationDuration: "25s" }}
                    >
                        <div className="absolute -right-48 -bottom-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full bg-primary/60 blur-[128px]" />
                        <div className="absolute -right-32 -bottom-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full bg-primary/20 blur-[96px]" />
                        <div className="absolute -right-16 -bottom-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full bg-primary/10 blur-[64px]" />
                    </div>
                </div>

                {/* Foreground layout */}
                <div className="relative z-10 flex min-h-screen flex-col">
                    <Header />

                    <main className="flex-1">
                        <section className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col px-4 py-4 sm:px-6 lg:px-8">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </section>
                    </main>

                    <Footer />
                </div>

                <Toaster closeButton visibleToasts={5} />
            </div>
        </BrowserRouter>
    )
}

export default App
