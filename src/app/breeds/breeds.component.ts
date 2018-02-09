import { Component, OnInit } from '@angular/core';
import { BreedsSevice } from './breeds.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent {
	breeds = null;
  constructor(private breedsService:BreedsSevice) { 
  	  this.breeds = breedsService.getBreeds();
  	  console.log(this.breeds);
  }

}
