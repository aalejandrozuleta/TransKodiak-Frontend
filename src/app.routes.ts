import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicleCompany', component: VehicleCompanyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
