function TrackCard({ nome, artista }: { nome: string, artista: string}) {
    return (
        <div className="bg-zinc-800 p-5 rounded-lg mb-3">
            <h1 className="text-xl">{nome}</h1>
            <p className=" text-sm text-gray-400">{artista}</p>
        </div>
    )
}

export default TrackCard