import { MovieService } from 'src/app/services/movie.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Movie, MovieDetailView } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
import { InfoCasting, Person } from 'src/app/models/person.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.scss']
})
export class DetailmovieComponent {

  currentId! : number

  currentMovie! : MovieDetailView

  constructor(
    private ar : ActivatedRoute,
    private movieService : MovieService,
    private personService : PersonService,
    private genreService : GenreService,
    private dom : DomSanitizer
    ) {}

    ngOnInit() {
      this.currentId = this.ar.snapshot.params["id"]

      this.movieService.getById(this.currentId).subscribe({
        next : (movie : Movie) => {
          this.currentMovie = {
            id : movie.id,
            title : movie.title,
            releaseYear : movie.releaseYear,
            idGenre : movie.id,
            idRealisator : movie.idRealisator,
            idScenarist : movie.idScenarist,
            synopsis : movie.synopsis,
            urlPoster : movie.urlPoster,
            urlTrailer : this.dom.bypassSecurityTrustResourceUrl(movie.urlTrailer.replace("watch?v=", "embed/"))

          }


          this.personService.getPersonById(movie.idRealisator).subscribe({next : (p : Person) => this.currentMovie.realisator = p})
          this.personService.getPersonById(movie.idScenarist).subscribe({next : (p : Person) => this.currentMovie.scenarist = p})

          this.personService.getCastingByMovieId(movie.id).subscribe({next : (info : InfoCasting[]) => {
            this.currentMovie.casting = info
            this.currentMovie.detailCasting = []
            this.currentMovie.casting.forEach(pe => {
              this.personService.getPersonById(pe.idPerson).subscribe(
                {next : (p : Person) => {
                  this.currentMovie.detailCasting?.push({
                    idMovie : movie.id,
                    idPerson : p.id,
                    acteur : p,
                    role : pe.role
                  })
                }

              })
            })
          }})
          console.log(this.currentMovie)
        }

      })
      if(this.currentMovie){
        console.log(this.currentMovie)
      }
    }
}
