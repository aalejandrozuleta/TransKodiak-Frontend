import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { recoveryPassword } from '@models/recoveryPassword';
import { ValuesInputCodePasswordService } from '@services/values-input-code-password.service';

@Component({
  selector: 'app-input-code-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input-code-password.component.html',
  styleUrl: './input-code-password.component.scss'
})
export class InputCodePasswordComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  value: string = '';

  constructor (private valuesInputCodePasswordService:ValuesInputCodePasswordService){}

  onChange1() {  
    console.log(this.fild);
    this.valuesInputCodePasswordService.createUser(
      this.fild as keyof recoveryPassword,
       this.value); 
  }

}
