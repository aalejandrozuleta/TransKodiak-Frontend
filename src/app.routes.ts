import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { SignInComponent } from '@feature/sign-in/sign-in.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicleCompany', component: VehicleCompanyComponent },
  { path: 'iniciarSesion', component: SignInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
