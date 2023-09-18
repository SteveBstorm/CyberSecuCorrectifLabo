import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = environment.apiurl

  get isConnected() : boolean {
    return localStorage.getItem("token") ? true : false
  }

  statusSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected);

  emitConnectionStatus() {
    this.statusSubject.next(this.isConnected)
  }

  constructor(
    private client : HttpClient,
    private toastr: ToastrService
  ) { }

  login(email: string, pwd : string) {
    this.client.post(this.url + "user/login",
                     {email : email, password : pwd},
                     {responseType : "text"}).subscribe({
                      next : (token : string) => {
                        localStorage.setItem("token", token)
                        this.emitConnectionStatus()
                      },
                      error :  (error) => {
                        this.toastr.error("Erreur de connexion", "Erreur")
                      }

                     })
  }

  logout() {
    localStorage.clear()
    this.emitConnectionStatus();
  }

  register(newUser: any) : Observable<any> {
    return this.client.post(this.url+ "user/register",
                    newUser)
  }

  getAll() {

  }

  setRole() {

  }
}
