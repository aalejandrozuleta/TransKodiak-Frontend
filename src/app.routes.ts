import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';
import { NosotrosComponent } from '@feature/nosotros/nosotros.component';
import { StatisticComponent } from '@feature/statistic/statistic.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'vehicle', component: VehicleCompanyComponent },
  { path:'about', component: NosotrosComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
