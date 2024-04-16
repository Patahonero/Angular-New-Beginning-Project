import { Injectable } from '@angular/core';
import { HousingLocation } from './interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingLocationListService {
  submitApplication(nombre: string, apellido: string, email: string) {
    console.log("Nombre: ",nombre)
    console.log("apellido",apellido);
    console.log("email",email);
    
    

    
  }
  //declaramos la url de la que cogemos las cosas,será un servidor en local
  //npm install -g json-server para crear el servidor
  //touch db.json(o createlo con addFile) --> ahí metemos todo el array de locations 
  //si hacemos json-server --watch db.json
  url ='http://localhost:3000/locations';
  constructor() { }

 async getAllHousingList():Promise<HousingLocation[]> {
  /* En este código, await fetch(this.url) espera a que la solicitud fetch se complete y luego asigna la respuesta a response. Luego, await response.json() 
  espera a que el cuerpo de la respuesta se lea y se convierta a JSON, y luego asigna el resultado a data.
   Finalmente, data se devuelve como el resultado de la función getAllHousingList. */
  const data= await fetch(this.url);  
  return await data.json() ?? [];
  }

  async getSpecificLocation(id: number):Promise<HousingLocation> {
  /* Esto es un template literal */
  const data=await fetch(`${this.url}/${id}`);
  return await data.json() ?? {};

  
  //Método anterior cuando lo teníamos en un servicio
    //   let ret=null;
  //   this.housingList.forEach(house => {
  //     if (house.id == id) {
  //       ret= house;
  //     } 
  //   });
  //   return ret;
 }
}
