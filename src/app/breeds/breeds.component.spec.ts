import { async, ComponentFixture, TestBed , inject,fakeAsync, tick} from '@angular/core/testing';
import { BreedsComponent } from './breeds.component';
import { BreedsSevice } from './breeds.service';
import { Http, Headers, HttpModule,     BaseRequestOptions, Response,ResponseOptions, } from '@angular/http';
import {Location} from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import {Routes, RouterModule, Router} from "@angular/router";
import { LoadingComponent } from '../shared/loading/loading.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { LoaderService } from '../shared/loading/loader.service';
import {MockBackend} from "@angular/http/testing";

describe('BreedsComponent', () => {
   let location: Location;
  let router: Router;
  let fixture;
  let service: BreedsSevice;
  let backend: MockBackend;

  beforeEach(()=>{
     TestBed.configureTestingModule({
     declarations: [BreedsComponent, LoadingComponent, CarouselComponent ],
     imports: [ HttpModule, RouterTestingModule],
     providers: [
        BreedsSevice,
        MockBackend,
      ]
   });
  });


  it('Should create the app', () =>{
      let fixture = TestBed.createComponent(BreedsComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
   });
   it('navigate to "home breeds" takes you to "/"', fakeAsync(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    router.navigate(['/']);
    tick();
    expect(location.path()).toBe('/');
    }));

 /*  it('Should have the sam breeds as the service', () =>{
    let response = ["bulldog"]
    let backend = TestBed.get(MockBackend);  
    let fixture = TestBed.createComponent(BreedsComponent);
    let app = fixture.debugElement.componentInstance;
    let breedsSevice = fixture.debugElement.injector.get(BreedsSevice);
    let service = TestBed.get(BreedsSevice);

     expect(app.breeds).toEqual(breedsSevice.getBreeds);
  });  */

  


  
});