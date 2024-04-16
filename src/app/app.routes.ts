import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes=[
    {path:"",component:HomeComponent,title:"Home Page"},
    //esta es la ruta que he declarado para que cada carta concreta tenga un id
    {path:"details/:id",component:DetailsComponent,title:"Details Page"},

]