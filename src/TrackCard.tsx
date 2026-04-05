function TrackCard({ nome, artista, imagem}: { nome: string, artista: string, imagem: string}) {
    return (
        <div className="flex items-center gap-4">
            <img src={imagem} className="w-12 h-12 rounded"></img>
        <div className="bg-zinc-900 p-5 rounded-lg mb-3">
            <h1 className="text-xl">{nome}</h1>
            <p className=" text-sm text-gray-400">{artista}</p>
        </div>
        </div>
    )
}

export default TrackCard