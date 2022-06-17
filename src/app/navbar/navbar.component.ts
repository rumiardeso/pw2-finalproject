import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal ,} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, NgModel } from '@angular/forms';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { ImagesService } from 'src/services/images.service';
import { ModalComponent } from '../modal/modal.component';
import { Result } from 'src/models/search.model';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageService : ImagesService;

  faHatWizard = faHatWizard;


  constructor(imageService: ImagesService , private router : Router) {
    this.imageService = imageService;
  }

  ngOnInit(): void {
  }




}
