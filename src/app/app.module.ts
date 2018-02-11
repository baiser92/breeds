import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedsDetailsComponent } from './breedDetails/breedsDetails.component';
import { BreedsSevice } from './breeds/breeds.service';





// Esto es paar crear las rutas siempre hay que importalos
const appRouter: Routes =[

  {path: '', component: BreedsComponent},
  {path: 'breeds', component: BreedsComponent},
  {path: 'breedsDetails/:name', component: BreedsDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    BreedsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpModule,
    HttpClientModule,


  ],
  providers: [BreedsSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
