import TrackCard from "./TrackCard"
function Dashboard()    {
    return (
        <div className="min-h-screen bg-[#0a0a0a] px-8 py-6 overflow-hidden text-white">
            <h1 className="mb-10">Dashboard</h1>

            <section className="mb-8">
                <h2>Top Musicas</h2>
                <TrackCard nome="Boyz n the hood" artista="Eazy-E" />
            </section>

            <section className="mb-8">
                <h2>Top Artistas</h2>
                <TrackCard nome="nanana" artista="bitch" />
            </section>

            <section className="mb-8">
                <h2>Tocadas Recentemente</h2>
            </section>
        </div>
    )
}

export default Dashboard