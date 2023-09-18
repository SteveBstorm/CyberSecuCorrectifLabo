export interface Movie {
    id: number
    title: string
    synopsis: string
    idGenre: number
    idRealisator: number
    idScenarist: number
    releaseYear: number
    urlPoster: string
    urlTrailer: string
}

export interface MovieListView {
  id : number
  title : string
  releaseYear : number
  genre : string
}
