import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationListService } from '../housing-location-list.service';
import { HousingLocation } from '../interfaces/housing-location';
import { FormControl,ReactiveFormsModule,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


  /* Ponemos esto,pues el id puede ser string o null,no podemos ponerle una admiración,pues eso sería decirle que por narices
  es un string y no le podemos prometer eso*/
  id:number | null;
  casaEscogida!: HousingLocation | null;
  constructor(private route:  ActivatedRoute,private housingService:HousingLocationListService){

    this.id=Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(){
    
    this.housingService.getSpecificLocation(this.id!).then(casaEscogida =>{
      this.casaEscogida=casaEscogida;
    }
    )
  }

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    apellido:new FormControl(''),
    email: new FormControl('')
  })

  //La función que se ejecuta una vez hayamos hecho submit
  submitAplication() {
    /* Vamos a enviar los datos al servicio */
    this.housingService.submitApplication(
      this.applyForm.value.nombre ?? '',
      this.applyForm.value.apellido ?? '',
      this.applyForm.value.email ?? ''

    );

    }
  

}
