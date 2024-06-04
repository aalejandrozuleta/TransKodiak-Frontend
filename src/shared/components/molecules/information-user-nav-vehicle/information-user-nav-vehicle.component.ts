import { Component } from '@angular/core';
import { ImageUserCompanyComponent } from '@atoms/image-user-company/image-user-company.component';
import { NameUserCompanyComponent } from '@atoms/name-user-company/name-user-company.component';
import { TypeCompanyComponent } from '@atoms/type-company/type-company.component';

@Component({
  selector: 'app-information-user-nav-vehicle',
  standalone: true,
  imports: [
    ImageUserCompanyComponent,
    NameUserCompanyComponent,
    TypeCompanyComponent,
  ],
  templateUrl: './information-user-nav-vehicle.component.html',
  styleUrl: './information-user-nav-vehicle.component.scss',
})
export class InformationUserNavVehicleComponent {}
