
export default function Page({scrimID}: {scrimID: string}){
    return (
        <div className="min-h-screen">
            <p>join this scrim room: {scrimID}</p>
        </div>
    )
}