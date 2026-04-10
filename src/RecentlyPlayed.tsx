import { useState, useEffect } from "react"

function RencentlyPlayed() {
    
    const [ recentes, setRecentes ] = useState<any[]>([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/Recently-Played', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setRecentes(Array.isArray(data) ? data : []))
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className='text-white text-center text-4xl mb-6 font-bold'>Top recentes</h1>
                <div className="bg-white/5 rounded-xl p-6 py-8">
                    <div className="flex flex-col gap-4 pl-16">
                        {recentes.map((recentes: any, index: number) => (
                            <div key={index + 1} className="flex items-center gap-4 border-b border-white/8 py-4">
                                <p className="text-gray-400 text-xl mr-8 font-bold">{index + 1}</p>
                                <img src={recentes.recentlyImages || 'https://placehold.co/96'} className="w-[115px] h-[115px] rounded-lg object-cover" />
                                <div className="text-white">
                                    <p>{recentes.name}</p>
                                    <p className="text-gray-500">{recentes.artista}</p>
                                     <p>{recentes.tocandoAgora && <span className="text-green-400 text-sm">Tocando Agora</span>}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RencentlyPlayed