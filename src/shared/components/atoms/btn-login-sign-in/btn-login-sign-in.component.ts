import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValuesAuthCompaniesService } from '@services/values-auth-companies.service';


@Component({
  selector: 'app-btn-login-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-login-sign-in.component.html',
  styleUrl: './btn-login-sign-in.component.scss',
})
export class BtnLoginSignInComponent {
  @Input() btnOption = '';

  constructor(
    private ValuesAuthCompaniesService: ValuesAuthCompaniesService,
  ) {}
  saveAuth() {
    this.ValuesAuthCompaniesService.onClick();  
    console.log("hola"); 
  }
}
