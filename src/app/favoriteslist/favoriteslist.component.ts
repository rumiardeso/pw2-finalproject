import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/services/images.service';

@Component({
  selector: 'app-favoriteslist',
  templateUrl: './favoriteslist.component.html',
  styleUrls: ['./favoriteslist.component.css']
})
export class FavoriteslistComponent implements OnInit {
  imageService: ImagesService;


  favorites = [];

  constructor(imageService: ImagesService) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.favorites = this.imageService.favorites;
  }

}
