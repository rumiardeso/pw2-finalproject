import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteslistComponent } from './favoriteslist/favoriteslist.component';
import { ImagesComponent } from './images/images.component';
import { InexistenteComponent } from './inexistente/inexistente.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '',component:ImagesComponent},
  {path: 'Image/:id' , component: DetailComponent},
  {path: 'favorites' , component: FavoriteslistComponent},
  {path: '**' , component: InexistenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
