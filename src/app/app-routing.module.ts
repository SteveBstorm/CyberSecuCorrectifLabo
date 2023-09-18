import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/shared/register/register.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ListmovieComponent } from './components/movie/listmovie/listmovie.component';

const routes: Routes = [
  {path : "register", component : RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "movielist", component : ListmovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
