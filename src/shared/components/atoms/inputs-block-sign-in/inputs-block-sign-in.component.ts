import { authUser } from './../../../../core/models/authUser';
import { Component, Input } from '@angular/core';
import { ValuesAuthCompaniesService } from '@services/values-auth-companies.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputs-block-sign-in',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inputs-block-sign-in.component.html',
  styleUrl: './inputs-block-sign-in.component.scss',
})
export class InputsBlockSignInComponent {
  @Input() img: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() fild: string = '';
  value: string = '';

  constructor (private ValuesAuthCompaniesService:ValuesAuthCompaniesService){}

  onChange() {  
    this.ValuesAuthCompaniesService.authUser(
      this.fild as keyof authUser,
       this.value);
  }
}
