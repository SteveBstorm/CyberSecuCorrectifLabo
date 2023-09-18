import { NgModule, CSP_NONCE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';

import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ListpersonComponent } from './components/person/listperson/listperson.component';
import { AddpersonComponent } from './components/person/addperson/addperson.component';
import { DetailpersonComponent } from './components/person/detailperson/detailperson.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';

import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ListmovieComponent } from './components/movie/listmovie/listmovie.component';
import { DetailmovieComponent } from './components/movie/detailmovie/detailmovie.component';
import { AddmovieComponent } from './components/movie/addmovie/addmovie.component';
import { TableModule } from 'primeng/table';

import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ListpersonComponent,
    AddpersonComponent,
    DetailpersonComponent,
    ListmovieComponent,
    DetailmovieComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    InputTextModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    CardModule
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
    // {
    //   provide: CSP_NONCE,
    //   useValue: globalThis.self.VideoDecoder
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
