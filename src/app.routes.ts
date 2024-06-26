import { Routes } from '@angular/router';
import { HomeComponent } from '@feature/home/home.component';
import { SignInComponent } from '@feature/sign-in/sign-in.component';
import { VehicleCompanyComponent } from '@feature/vehicle-company/vehicle-company.component';
import { NosotrosComponent } from '@feature/nosotros/nosotros.component';
import { StatisticComponent } from '@feature/statistic/statistic.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicleCompany', component: VehicleCompanyComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'about', component: NosotrosComponent},
  { path: 'statistic', component: StatisticComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
