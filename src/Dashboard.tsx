import {useState, useEffect } from 'react'
import TrackCard from "./TrackCard"
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
            fetch('http://127.0.0.1:3000/top-tracks', {   
                headers: {                                                                         // Busca Top Tracks
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => { setTracks(Array.isArray(data) ? data : [])})
        }, [])

        // Busca top artitas

        useEffect(() => {
            fetch('http://127.0.0.1:3000/top-artists', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => { setArtists(Array.isArray(data) ? data: [])
                })
        }, [])

                                                                                // busca musicas recentes
         //   useEffect(() => {
          //      fetch('http://127.0.0.1:3000/recently-played', {
           //         headers: {
        //                'Authorization': `Bearer ${localStorage.getItem('token')}`        // buscar musicas recentes. Codigo funcional mas não está sendo utilizado
            //        }
            //    })       
            //        .then(res => res.json())
            //        .then(data => {
             //           console.log(data)
            //            setRecently(Array.isArray(data) ? data: [])
           //         })
          //  }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0a]">    
            <div className=" px-8 py-6 overflow-hidden text-white max-w-3xl mx-auto">
                <h1 className="mb-10 text-3xl font-bold mb-8">Dashboard</h1>

            <section onClick={() => navigate('/top-tracks')} className="... cursor-pointer mb-8" >
                <h2 className="text-xl font-semibold mb-3">Top Musicas</h2>
                <div className="flex gap-4">
                    {tracks.slice(0, 5).map((track: any) => (
                        <img key={track.ranking} src={track.imagem || 'https://placehold.co/96'} className="w-24 h-24 rounded-lg object-cover" />
                    ))}
                </div>
            </section>

            <section onClick={() => navigate('/top-artists')} className="... cursor-pointer mb-8" >
                <h2 className="text-xl font-semibold mb-3">Top Artistas</h2>
                    <div className="flex gap-4"> 
                        {artists.slice(0,5).map((artists: any) => (
                            <img key={artists.ranking} src={artists.imagemArtists || 'https://placehold.co/96'} className="w-24 h-24 rounded-lg object-cover" />
                        ))}
                    </div>
            </section>

            <section onClick={() => navigate('/recently-played')} className="... cursor-pointer mb-8">
                <h2 className="text-xl font-semibold mb-3">Tocadas Recentemente</h2>
                   <div className="flex gap-4">
                    <img src="https://via.placeholder.com/80" className="w-24 h-24 rounded-lg object-cover" />
                      <img src="https://via.placeholder.com/80" className="w-24 h-24 rounded-lg object-cover" />
                       <img src="https://via.placeholder.com/80" className="w-24 h-24 rounded-lg object-cover" />
                        <img src="https://via.placeholder.com/80" className="w-24 h-24 rounded-lg object-cover" />
                         <img src="https://via.placeholder.com/80" className="w-24 h-24 rounded-lg object-cover" />
                    </div>
            </section>
            </div>
        </div>
    )
}

export default Dashboard