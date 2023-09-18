import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Genre } from 'src/app/models/genre.model';
import { Movie, MovieListView } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.scss']
})
export class ListmovieComponent {

  listMovie! : MovieListView[]
  listGenre! : Genre[]
  constructor(
    private movieService : MovieService,
    private genreService : GenreService) {}

  ngOnInit() {
    this.genreService.listGenreSubject.subscribe(
      {next : (list : Genre[]) => {
        this.listGenre = list
      }}
    )
    this.genreService.emitListGenre()
    this.movieService.getAll().subscribe({
      next : (listm : Movie[]) =>
        {
          this.listMovie = listm.map((m : Movie) => {
            return {id : m.id,
                    title :m.title,
                    releaseYear : m.releaseYear,
                    genre : this.listGenre.find(g => g.id == m.idGenre)?.label ?? "" }
          })
        }})

    }
  }

