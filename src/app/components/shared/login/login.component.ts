import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string
  pwd! : string
  isConnected! : boolean

  constructor(private userService : UserService){}

  ngOnInit() {
    this.userService.statusSubject
        .subscribe({next : (status : boolean)=> this.isConnected = status})

  }
  login(){
    this.userService.login(this.email, this.pwd)
  }
  logout() {
    this.userService.logout()
  }

}
