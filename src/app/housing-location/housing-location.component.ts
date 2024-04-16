import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
//aquí me traigo ea este espacio el nombre router module para poder utilizarlo
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  //aquí le digo que lo utilice
  imports: [/*RouterModule*/],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  /* Aquí hacemos el constructor de nuestra app,en el cual deberemos declarar una variable de tipo Router
  para usarlo luego  en la función,en la cual decimos al router que navegue por url a una url concreta,que estará declarada
  en app.routes.ts */
  constructor(private router: Router){}
routeToDetails(housingLocation:HousingLocation) {
  this.router.navigateByUrl(`/details/${housingLocation.id}`);
}
  
  /**Aquí decimos que hay una propiedad,llamada Housing location que
   * nos va a venir dada,desde otro componente o desde donde sea,pero que nos va a venir dada
   * concretamente de home.component
   */
  @Input() housingLocation!:HousingLocation;

/* Estas son otras propiedades,que no vienen dadas desde fuera */
/*   name: any;
  city: any;
  state: any;
 */
}
