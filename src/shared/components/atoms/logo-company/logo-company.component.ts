import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-company',
  standalone: true,
  imports: [],
  templateUrl: './logo-company.component.html',
  styleUrl: './logo-company.component.scss'
})
export class LogoCompanyComponent {
  // logoCompany:string = '@icons/logo-company.png';
  logo:string = '../../../../assets/icons/logo-company.png'
}
