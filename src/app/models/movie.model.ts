import { Genre } from "./genre.model"
import { InfoCasting, Person } from "./person.model"

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

export interface MovieDetailView {
  id: number
    title: string
    synopsis: string
    idGenre: number
    genre? : Genre
    idRealisator: number
    realisator? : Person
    idScenarist: number
    scenarist? : Person
    releaseYear: number
    urlPoster: string
    urlTrailer: any

    casting? : InfoCasting[]
    detailCasting? : DetailCasting[]
}

export interface DetailCasting {
  idPerson : number
  acteur : Person
  role : string
  idMovie : number
}
