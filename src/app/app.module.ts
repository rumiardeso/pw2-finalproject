import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImagesComponent } from './images/images.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from 'src/services/images.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { InexistenteComponent } from './inexistente/inexistente.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteslistComponent } from './favoriteslist/favoriteslist.component';





@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    NavbarComponent,
    ModalComponent,
    NotfoundComponent,
    DetailComponent,
    InexistenteComponent,
    FavoritesComponent,
    FavoriteslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


