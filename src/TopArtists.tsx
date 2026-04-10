import { useState, useEffect } from "react"

function TopArtists() {
    
    const [ artistas, setArtistas ] = useState<any[]>([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/top-artists', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setArtistas(Array.isArray(data) ? data : []))
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className='text-white text-center text-4xl mb-6 font-bold'>Top Artistas</h1>
                <div className="bg-white/5 rounded-xl p-6 py-8">
                    <div className="flex flex-col gap-4 pl-16">
                        {artistas.map((artistas: any) => (
                            <div key={artistas.ranking} className="flex items-center gap-4 border-b border-white/8 py-4">
                                <p className="text-gray-400 text-xl mr-8 font-bold">{artistas.ranking}</p>
                                <img src={artistas.imagemArtists || 'https://placehold.co/96'} className="w-[115px] h-[115px] rounded-lg object-cover" />
                                <div className="text-white">
                                    <p>{artistas.name}</p>
                                    <p className="text-gray-500">Plays: {artistas.playcount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopArtists