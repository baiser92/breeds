import { Component, OnInit } from '@angular/core';
import { BreedsSevice } from './breeds.service';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {Routes, RouterModule} from "@angular/router";


@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
  providers: [BreedsSevice]
})

 

export class BreedsComponent implements OnInit{
	breeds = [];
  constructor(private breedsService:BreedsSevice) {}
    ngOnInit():void{
  	   this.breedsService.getBreeds().subscribe(
       data => { 
          for (var i in data.message) {
            if (data.message[i].length > 0) {
              this.breeds.push(i)
            }
          }
          return {"a":1, "b":3}
       });  	 	
  }


}
