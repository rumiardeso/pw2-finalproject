import { Component, OnInit,Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  faEye = faEye;

  constructor() { }

  @Input() imagem: {id:string ,imagem: string,title: string,data:string}

  ngOnInit(): void {
  }

}
