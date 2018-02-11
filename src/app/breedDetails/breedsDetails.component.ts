import { Component, OnInit } from '@angular/core';
import { BreedsSevice } from '../breeds/breeds.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute} from '@angular/router'
import { LoaderService } from '../shared/loading/loader.service';

@Component({
  selector: 'app-detailsBreeds',
  templateUrl: './breedsDetails.component.html',
  styleUrls: ['./breedsDetails.component.css'],
  providers: [BreedsSevice, LoaderService]
})
export class BreedsDetailsComponent implements OnInit {
	nameBreed: string; 
	breadImages = [];
  constructor(private route: ActivatedRoute,private breedsService:BreedsSevice,private loaderService: LoaderService) {}

   ngOnInit():void{

   		this.loaderService.display(true);
   		this.nameBreed = this.route.snapshot.params['name'];
  	   this.breedsService.getImageBreed(this.nameBreed).subscribe(
       data => { 
       		this.breadImages = data.message;
          this.loaderService.display(false);

       });  	 	
  }

}
