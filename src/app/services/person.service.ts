import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { InfoCasting, Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url : string = environment.apiurl
  constructor(
    private client : HttpClient
  ) { }

  getPersonById(id : number) : Observable<Person> {
    return this.client.get<Person>(this.url+"person/"+ id)
  }

  getCastingByMovieId(movieId : number) : Observable<InfoCasting[]> {
    return this.client.get<InfoCasting[]>(this.url+ "person/casting/" + movieId)
  }

  getAll() : Observable<Person[]> {
    return this.client.get<Person[]>(this.url + "person")
  }

  setActor(info : InfoCasting) : Observable<any> {
    return this.client.post(this.url + "person/setactor", info)
  }
}
