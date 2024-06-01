import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleWelcomeVehicleCompanyComponent } from 'src/shared/components/atoms/title-welcome-vehicle-company/title-welcome-vehicle-company.component';
import { ImgWelcomeVehicleCompanyComponent } from 'src/shared/components/atoms/img-welcome-vehicle-company/img-welcome-vehicle-company.component';

@Component({
  selector: 'app-block-welcome-vehicle-company',
  standalone: true,
  imports: [
    CommonModule,
    TitleWelcomeVehicleCompanyComponent,
    ImgWelcomeVehicleCompanyComponent
  ],
  templateUrl: './block-welcome-vehicle-company.component.html',
  styleUrls: ['./block-welcome-vehicle-company.component.scss']
})
export class BlockWelcomeVehicleCompanyComponent { }
