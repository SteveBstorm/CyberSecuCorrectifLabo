import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/shared/register/register.component';
import { LoginComponent } from './components/shared/login/login.component';
import { ListmovieComponent } from './components/movie/listmovie/listmovie.component';
import { DetailmovieComponent } from './components/movie/detailmovie/detailmovie.component';
import { AddmovieComponent } from './components/movie/addmovie/addmovie.component';

const routes: Routes = [
  {path : "register", component : RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "movielist", component : ListmovieComponent},
  {path : "moviedetail/:id", component : DetailmovieComponent},
  {path : "movieadd", component : AddmovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
