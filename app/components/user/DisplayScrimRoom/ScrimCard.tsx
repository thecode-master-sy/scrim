import { ProfileImage } from "../Profile/profileimage";


export default function ScrimCard() {
    return (
        <div className="grid gap-2 bg-scrim-card-bg border border-scrim-card-border rounded-md">
            <header className="px-4 pt-4">
                <h1 className="font-semibold">Scrim room by 10pm wat</h1>
            </header>

            <main className="px-4">
                <p>three modes snd, hard point and domination, the maps would be decided in chat</p>
            </main>

            <footer className="flex gap-2 items-center border-t border-t-scrim-input-border px-4 pb-4">
                <ProfileImage/>
                <p>Heisenberg</p>
            </footer>
        </div>
    )
}