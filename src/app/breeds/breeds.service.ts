import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
@Injectable()


export class BreedsSevice  {
	//APPI_ENDPOINT = "https://dog.ceo/api/breeds/"
	constructor(private http: Http) {}
		// code...
	public getBreeds(){
		return this.http.get('https://dog.ceo/api/breeds/list/all')
	}
	
}