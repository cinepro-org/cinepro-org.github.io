import { Button } from "@/components/ui/button.tsx"
import { Bug, HomeIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <h1 className="mt-20 text-4xl font-bold">404 - Not Found</h1>
            <p className="text-lg">
                The page you are looking for does not exist or has moved.
            </p>
            <div
                className={
                    "mt-2 flex flex-col items-center justify-center gap-2"
                }
            >
                <Button size="lg" asChild>
                    <Link to="/" className="mt-4">
                        Back Home
                        <HomeIcon />
                    </Link>
                </Button>
                <Button size="lg" variant={"ghost"} asChild>
                    <Link
                        to="https://github.com/[USERNAME]/CinePro/issues"
                        target={"_blank"}
                        className="mt-4"
                    >
                        Report an issue
                        <Bug />
                    </Link>
                </Button>
            </div>
        </>
    )
}
