import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputRecoveryPasswordComponent } from '@atoms/input-recovery-password/input-recovery-password.component';
import { TittleRecoveryPasswordComponent } from '@atoms/tittle-recovery-password/tittle-recovery-password.component';
import { MenuItem } from '@models/menu-item';
import { BlockFormRecoveryPasswordComponent } from '@molecules/block-form-recovery-password/block-form-recovery-password.component';


@Component({
  selector: 'app-group-recovery-password',
  standalone: true,
  imports: [ CommonModule,
     BlockFormRecoveryPasswordComponent,
     TittleRecoveryPasswordComponent,
     InputRecoveryPasswordComponent

    ],
  templateUrl: './group-recovery-password.component.html',
  styleUrl: './group-recovery-password.component.scss'
})
export class GroupRecoveryPasswordComponent {

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() fild: string = '';
  
  dataform3 = [
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
      placeholder: 'Numero de Celular', 
      fild: 'number'
    },
  ];
}