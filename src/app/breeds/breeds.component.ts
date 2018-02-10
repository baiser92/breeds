import { Component, OnInit } from '@angular/core';
import { BreedsSevice } from './breeds.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})

 

export class BreedsComponent implements OnInit{

	breeds = [];
	breedsServices = null;
	breaddd =["a","be","c"];
  

  constructor(private breedsService:BreedsSevice) {}
  
  ngOnInit():void{
  	   this.breedsService.getBreeds().subscribe(
       data => { 
          for (var i in data.message) {
            if (data.message[i].length > 0) {
              this.breeds.push(i)
            }
          }
       });  	 	
  }


}
