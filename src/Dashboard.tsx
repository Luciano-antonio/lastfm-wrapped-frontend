import {useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
function Dashboard()    {
    const navigate = useNavigate()

    const [tracks, setTracks ] = useState<any[]>([])                //  useStates
    const [artists, setArtists ] = useState<any[]>([])
    const [recently, setRecently ] = useState<any[]>([])


    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    
    if (token) {
        localStorage.setItem('token', token)                // validação de tokens
    }
    
    
     useEffect(() => {                                                                             // useEffects e fetchs
            fetch(`${import.meta.env.VITE_API_URL}/top-tracks`, {   
                headers: {                                                                         // Busca Top Tracks
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => { setTracks(Array.isArray(data) ? data : [])})
        }, [])

        // Busca top artitas

        useEffect(() => {
            fetch(`${import.meta.env.VITE_API_URL}/top-artists`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => { setArtists(Array.isArray(data) ? data: [])
                })
        }, [])

                                                                                // busca musicas recentes
            useEffect(() => {
               const buscar = () => { 
                fetch(`${import.meta.env.VITE_API_URL}/recently-played`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`        // buscar musicas recentes. Codigo funcional mas não está sendo utilizado
                    }
                })       
                    .then(res => res.json())
                    .then(data => { setRecently(Array.isArray(data) ? data: [])
                    })

               }
                
               buscar()
               const intervalo = setInterval(buscar,30000)

               return () => clearInterval(intervalo)
            }, [])

    return (
        <div className="min-h-screen bg-[#0f0f13]">    
            <div className=" px-8 py-12 overflow-hidden text-white max-w-3xl mx-auto px-16">

                <h1 className="mb-10 text-4xl font-bold text-center mb-12">Dashboard</h1>

            <section onClick={() => navigate('/top-tracks')} className="... cursor-pointer mb-12 ... fade-in" >
                <h2 className="text-2xl font-semibold mb-3">Top Musicas</h2>
                {tracks.length === 0 ? (
                    <div className="flex gap-4">
                        {Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="w-28 h-28 rounded-lg bg-white/10 animate-puls" />
                        ))}
                    </div>
                ) : (
                    <div className="flex gap-4 overflow-visible">
                    {tracks.slice(0, 5).map((track: any) => (
                        <div key={track.imagem} className="relative group cursor-pointer hover:scale-110 transition-transform duration-200">
                            <img src={track.imagem || 'https://placehold.co/96'} className="w-28 h-28 rounded-lg object-cover" />
                            <div className="absolute buttom-0 left-0 right-0 bg-zinc-800/40 rounded-b-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-xs truncate">{track.name}</p>
                                <p className="text-white text-xs truncate">{track.artista}</p>
                                
                            </div>
                         </div>
                    ))}
                </div>
                )}
                
            </section>

            <section onClick={() => navigate('/top-artists')} className="... cursor-pointer mb-12 ... fade-in" >
                <h2 className="text-2xl font-semibold mb-3">Top Artistas</h2>
                    
                    {artists.length === 0 ? (
                        <div className="flex gap-4">
                            {Array.from({length: 5}).map((_, index) => (
                                <div key={index} className="w-28 h-28 rounded-lg bg-white/10 animate-puls" />
                            ))}
                        </div>
                    ) : (

                        <div className="flex gap-4 overflow-visible"> 
                        {artists.slice(0,5).map((artists: any) => (
                            <div key={artists.imagemArtists} className="relative group cursor-pointer hover:scale-110 transition-transform duration-200">
                            <img src={artists.imagemArtists || 'https://placehold.co/96'} className="w-28 h-28 rounded-lg object-cover" />
                            <div className="absolute buttom-0 left-0 right-0 bg-zinc-800/40 rounded-b-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-xs truncate">{artists.name}</p>
                                <p className="text-white text-xs truncate">{artists.artista}</p>
                                
                            </div>
                         </div>
                        ))}
                    </div>
                    )}
                    
                    
            </section>

            <section onClick={() => navigate('/recently-played')} className="... cursor-pointer mb-12 ... fade-in">
                <h2 className="text-2xl font-semibold mb-3">Tocadas Recentemente</h2>
                   
                   {recently.length === 0 ? (
                    <div className="flex gap-4">
                        {Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="w-28 h-28 rounded-lg bg-white/10 animate-plus" />
                        ))}
                    </div>
                   ) : (
                        
                        <div className="flex gap-4 overflow-visible">
                    {recently.slice(0,5).map((recently: any) => (
                        <div key={recently.recentlyImages} className="relative group cursor-pointer hover:scale-110 transition-transform duration-200">
                            <img src={recently.recentlyImages || 'https://placehold.co/96'} className="w-28 h-28 rounded-lg object-cover" />
                            <div className="absolute buttom-0 left-0 right-0 bg-zinc-800/40 rounded-b-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-xs truncate">{recently.name}</p>
                                <p className="text-white text-xs truncate">{recently.artista}</p>
                                
                            </div>
                         </div>
                    ))}
                    </div>
                   )}
                           
            </section>
            </div>
        </div>
    )
}

export default Dashboard