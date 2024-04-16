import { Component } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from '@angular/common';
import { HousingLocationListService } from '../housing-location-list.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
   /*  //Aquí hay dos imports,el de HousingLocationComponent para poder utilizarlo luego
   en la plantilla HTML ,al igual que el CommonModule para el for el if y eso*/
    imports: [HousingLocationComponent,CommonModule]
})
export class HomeComponent {

  //aquí declaro una variable,y lo que le digo es que será un array del tipo HousingLocation
  listadoDeTodasLasCasas:HousingLocation[]=[];
  filteredLocationList:HousingLocation[]=[]; 
  /* Obtenemso toda la lista,y asignamos ese valor a nuestra variable de listado de Todas las casas */
  constructor(private housingService:HousingLocationListService){
    this.housingService.getAllHousingList().then((listadoDeTodasLasCasas: HousingLocation[]) => {
      this.listadoDeTodasLasCasas= listadoDeTodasLasCasas;
      this.filteredLocationList=listadoDeTodasLasCasas;
    })
  }

  //método para filtrar elementos,lo hacemos en react,con una función flecha
  filteredResults(texto: string,e:Event) {
    e.preventDefault();
    if(texto){
      this.filteredLocationList=this.listadoDeTodasLasCasas.filter(house => house?.city.toLowerCase().includes(texto.toLowerCase()));
      console.log(this.filteredLocationList);
      
    }

    }

}
