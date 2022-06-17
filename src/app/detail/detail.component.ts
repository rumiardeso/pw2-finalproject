import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/models/image.model';
import { ImagesService } from 'src/services/images.service';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  images : Image[];
  id : any ;
  i: any;

  imageService : ImagesService;



  constructor(imageService: ImagesService , private router : ActivatedRoute) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.imageService.getImagesId(this.id).subscribe((resp) => {
      this.i=resp;
   }) ;
  }

  
  onFav(FavID:string ,FavImg : string,Favtitle: string, Favdate){
    this.imageService.addFavorites({id: FavID,imagem: FavImg,title : Favtitle, data :Favdate })
  }
}
