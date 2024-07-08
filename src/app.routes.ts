import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { RegisterFormCompanyComponent } from '@feature/register-form-company/register-form-company.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';
import { NosotrosComponent } from '@feature/nosotros/nosotros.component';
import { StatisticComponent } from '@feature/statistic/statistic.component'
import { RegisterIntermediaryComponent } from '@feature/register-intermediary/register-intermediary.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicleCompany', component: VehicleCompanyComponent },
  { path: 'registerVehicle', component: RegisterFormCompanyComponent},
  { path: 'registerIntermediary', component: RegisterIntermediaryComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
