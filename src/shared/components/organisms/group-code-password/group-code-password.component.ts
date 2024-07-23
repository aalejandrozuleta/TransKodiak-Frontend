import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputCodePasswordComponent } from '@atoms/input-code-password/input-code-password.component';
import { TittleRecoveryPasswordComponent } from '@atoms/tittle-recovery-password/tittle-recovery-password.component';
import { MenuItem } from '@models/menu-item';
import { BlockFormCodePasswordComponent } from '@molecules/block-form-code-password/block-form-code-password.component';

@Component({
  selector: 'app-group-code-password',
  standalone: true,
  imports: [ CommonModule,
    BlockFormCodePasswordComponent,
     TittleRecoveryPasswordComponent,
     InputCodePasswordComponent

    ],
  templateUrl: './group-code-password.component.html',
  styleUrl: './group-code-password.component.scss'
})
export class GroupCodePasswordComponent {

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  
  dataform4 = [
    {
      label: 'email',
      id: 'email',
      type: 'email',
      placeholder: 'Correo Electronico',
      fild: 'email'
    },
    {
      label: 'number',
      id: 'number',
      type: 'text',
      placeholder: 'Ingresa el codigo', 
      fild: 'number'
    },
  ];
}
