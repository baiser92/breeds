import { TestBed, async ,fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import {Location} from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from "@angular/router";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BreedsComponent

      ],
      imports: [
           RouterTestingModule.withRoutes([
             {path: '', component: BreedsComponent}])
      ]
    }).compileComponents();
  }));
   
    

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "home breeds" takes you to "/"', fakeAsync(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    router.navigate(['/']);
    tick();
    expect(location.path()).toBe('/');
  }));

 
});
