import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = environment.apiurl
  constructor(
    private client : HttpClient
  ) { }

  getAll() : Observable<Movie[]> {
    return this.client.get<Movie[]>(this.url+ "movie")
  }

  getById(id : number) : Observable<Movie> {
    return this.client.get<Movie>(this.url + "movie/" +id)
  }

  addMovie(newMovie : Movie) : Observable<any> {
    return this.client.post(this.url+"movie", newMovie)
  }
}
