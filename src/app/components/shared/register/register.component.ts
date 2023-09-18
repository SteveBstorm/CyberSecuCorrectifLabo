import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  fg! : FormGroup

  registerOk! : boolean

  constructor(
    private userService : UserService,
    private router : Router,
    private builder : FormBuilder
    ) {}

  ngOnInit(){
    this.fg = this.builder.group({
      nickname : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, Validators.required],
      confirmpwd : [null, [Validators.required]]
    })
  }

  onSubmit() {
    this.userService.register(this.fg.value).subscribe(
      {
        next : () => {
          this.registerOk = true
          setTimeout(() => this.router.navigate(["login"]), 2500)
        },
        error : () => {
          this.fg.reset()
        }

      }
    )
  }

  confirmPassword() : ValidatorFn {
    return (control : AbstractControl) => {
      let originControl : AbstractControl = this.fg.controls["password"] ?? undefined
      let pwdOrigin = originControl.value
      let pwdConfirm = control.value

      if(originControl.value != null) {
        if(pwdConfirm == pwdOrigin) {
          return null
        }
        return {pwdError : "Les deux mdp ne correspondent pas"}
      }
      return null
    }
  }
}
