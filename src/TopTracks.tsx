import { useState, useEffect } from "react"
import type { TrackMontado } from "./types"

function TopTracks() {
    
    const [ musicas, setMusicas ] = useState<TrackMontado[]>([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/top-tracks`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setMusicas(Array.isArray(data) ? data : []))
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className='text-white text-center text-4xl mb-6 font-bold'>Top Musicas</h1>
                <div className="bg-white/5 rounded-xl p-6 py-8">
                    <div className="flex flex-col gap-4 pl-16">
                        {musicas.map((track: TrackMontado) => (
                            <div key={track.ranking} className="flex items-center gap-4 border-b border-white/8 py-4">
                                <p className="text-gray-400 text-xl mr-8 font-bold">{track.ranking}</p>
                                <img src={track.imagem || 'https://placehold.co/96'} className="w-[115px] h-[115px] rounded-lg object-cover" />
                                <div className="text-white">
                                    <p>{track.name}</p>
                                    <p className="text-gray-400">{track.artista}</p>
                                    <p className="text-gray-500">Plays: {track.plays}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTracks