import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { RegisterFormCompanyComponent } from '@feature/register-form-company/register-form-company.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicleCompany', component: VehicleCompanyComponent },
  { path: 'registerCompany', component: RegisterFormCompanyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
