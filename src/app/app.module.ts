import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedsSevice } from './breeds/breeds.service';



// Esto es paar crear las rutas siempre hay que importalos
const appRouter: Routes =[

  {path: '', component: AppComponent},
  {path: 'breeds', component: BreedsComponent},
  
 /* {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent}, */
];

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [BreedsSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
