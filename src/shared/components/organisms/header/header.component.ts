import { Component } from '@angular/core';
import { BtnRegisterComponent } from '@atoms/btn-register/btn-register.component';
import { LogoCompanyComponent } from '@atoms/logo-company/logo-company.component';
import { NavBarComponent } from '@molecules/nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoCompanyComponent, BtnRegisterComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
