import { Button } from "../../ui/button";
import Link from "next/link"

export default function ScrimNotFound() {
    return (
        <div className="grid gap-2 m-auto">
            <p>oops! looks like this scrim room does not exist</p>
            <Button size="sm" asChild>
                <Link href="/scrims">
                    Search for scrim rooms
                </Link>
            </Button>
        </div>
    )
}