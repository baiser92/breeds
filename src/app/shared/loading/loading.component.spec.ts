import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, Headers, HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing'
import { LoadingComponent } from './loading.component';
import { LoaderService } from './loader.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [ HttpModule, RouterTestingModule],
      providers: [LoaderService]
    })
    .compileComponents();
  }));

  it('Should create the app', () =>{
      let fixture = TestBed.createComponent(LoadingComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
   }); 

 
});
