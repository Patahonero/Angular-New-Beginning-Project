import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { NgFor, NgForOf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <header class="brand-name">
      <img src="/assets/logo.svg" alt="" class="brand-logo" aria-hidden="true">
    </header>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
    
    `,
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, HousingLocationComponent,RouterModule,]
})
export class AppComponent {
  title = 'homes';
}
