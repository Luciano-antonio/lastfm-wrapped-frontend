    // UseState [tracks, setTracks]

export interface TrackMontado {
    name: string,
    artista: string,
    plays: string,
    ranking: string,
    imagem: string
}

        // UseState [artists, setArtists]

export interface ArtistsAPI {
    name: string,
    playcount: number,
    ranking: number,
    imagemArtists: string
}

    // useState [recently, setRecently]

export interface RecentlyFormatado {
    name: string,
    artista: string,
    tocandoAgora: boolean,
    recentlyImages: string
}