import { Component, OnInit } from '@angular/core';
import { BreedsSevice } from './breeds.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detailsBreeds',
  templateUrl: './breedsDetails.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsDetailsComponent implements OnInit {
	nameBreed: string; 
	breadImages = {};
  constructor(private route: ActivatedRoute,private breedsService:BreedsSevice) {}

   ngOnInit():void{

   		
   		this.nameBreed = this.route.snapshot.params['name'];
   		console.log(this.nameBreed)
  	   this.breedsService.getImageBreed(this.nameBreed).subscribe(
       data => { 
       		this.breadImages = data.message;
         	console.log(this.breadImages);

       });  	 	
  }

}
