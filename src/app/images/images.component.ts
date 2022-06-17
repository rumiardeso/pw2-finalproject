import { Component,Input, OnInit } from '@angular/core';
import { Image } from 'src/models/image.model';
import { ImagesService } from 'src/services/images.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {


  imagesService: ImagesService;

  constructor(private imageService: ImagesService) {
    this.imagesService = imageService;
  }

  faEye = faEye;

  images : Image[];

  pagina : number =  1;


  ngOnInit(): void {
   
    this.procura();

  }

  procura(){
    this.imageService.getImages(this.pagina).subscribe((resp) => {
      this.carregarImages(resp);
    }) ; 
  }

  pesquisar(text){
    this.imageService.getImagesSerch(text).subscribe((resp) => {
      this.carregarImages(resp);
    })
    console.log(text);
  } 

  carregarImages(images) {
    this.images = images;
  }

  anterior(){
    if (this.pagina == 1) {
      alert("Está na primeira página!")
  } 
    else {
      this.pagina = this.pagina - 1;
      this.procura(); 
    }          
  }

  seguinte(){
    this.pagina = this.pagina + 1 ;
    this.procura();
  }

} 
