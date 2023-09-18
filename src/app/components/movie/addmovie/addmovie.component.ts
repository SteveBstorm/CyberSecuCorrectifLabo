import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { InfoCasting, Person } from 'src/app/models/person.model';
import { Genre } from 'src/app/models/genre.model';
import { PersonService } from 'src/app/services/person.service';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent {

  fg! : FormGroup
  listPerson! : Person[]
  listGenre! : Genre[]
  constructor(
    private builder : FormBuilder,
    private pService : PersonService,
    private gService : GenreService,
    private mService : MovieService
    ){

    }

    ngOnInit() {
      this.pService.getAll().subscribe({
        next : (list : Person[]) =>
        {
          this.listPerson = list
          this.gService.listGenreSubject.subscribe((list) => {
            this.listGenre = list
            console.log(this.listGenre)

          })
          this.gService.emitListGenre()
          this.initForm()
        }
      })



    }

    initForm() {
      this.fg = this.builder.group({
        title : [null, Validators.required],
        synopsis : [null, Validators.required],
        releaseYear : [0],
        idRealisator: [0],
        idScenarist : [0],
        urlPoster : [],
        urlTrailer : [],
        idGenre : [0],
        casting : this.builder.array([])
      })
    }

    getCastingArray() : FormArray {
      return this.fg.get("casting") as FormArray
    }

    addCastingRow() {
      this.getCastingArray().push(this.builder.group({
        idPerson : [],
        role : [""]
      }))
    }

    onSubmit() {
      console.log("boulet")
      const newMovie : Movie = {
        id : this.fg.value["id"],
        title : this.fg.value["title"],
        synopsis : this.fg.value["synopsis"],
        releaseYear : this.fg.value["releaseYear"],
        idGenre : Number.parseInt(this.fg.value["idGenre"]),
        idRealisator : Number.parseInt(this.fg.value["idRealisator"]),
        idScenarist : Number.parseInt(this.fg.value["idScenarist"]),
        urlPoster : this.fg.value["urlPoster"],
        urlTrailer : this.fg.value["urlTrailer"]
      }
      console.log(newMovie)
      //console.log(this.fg.value["casting"])
      const casting : InfoCasting[] = this.fg.value["casting"]
      console.log(casting)
      this.mService.addMovie(newMovie).subscribe({
        next : (id) => {
          console.log("nouvel id : " + id)
          const casting : InfoCasting[] = this.fg.value["casting"]

          casting.forEach(c => {
            c.idMovie = Number.parseInt(id)
            this.pService.setActor(c).subscribe()
          })
          console.log(casting)
        }
      })
    }
}
