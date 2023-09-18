import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  listGenre! : Genre[]

  listGenreSubject : Subject<Genre[]> = new Subject<Genre[]>()

  emitListGenre() {
    if(!this.listGenre) {
      this.getAll()
    }
    else {
      this.listGenreSubject.next(this.listGenre)

    }

  }

  private url : string  = environment.apiurl
  constructor(
    private client : HttpClient
  ) { }

  getAll()
  {
    this.client.get<Genre[]>(this.url + "genre").subscribe({
      next : (list) => {
        this.listGenre = list
        this.listGenreSubject.next(this.listGenre)

      }
    })
  }
}
