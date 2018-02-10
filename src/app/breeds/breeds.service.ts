import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()


export class BreedsSevice  {
	//APPI_ENDPOINT = "https://dog.ceo/api/breeds/"
	constructor(private http: Http) {}
		// code...
	public getBreeds() {
	
      interface Breeds {
        message: any;
      }

    	//return this.http.get<Breeds>('https://dog.ceo/api/breeds/list/all');
        return this.http.get('https://dog.ceo/api/breeds/list/all')
                .map((res:Response) => res.json()) 
     
  }

  public getImageBreed(nameBreed){
    ///api/breed/{breed name}/images
    return this.http.get('https://dog.ceo/api/breed/'+nameBreed+'/images')
            .map((res:Response) => res.json()) 

  }
	
	
}