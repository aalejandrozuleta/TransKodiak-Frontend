import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupRecoveryPasswordComponent } from '@organisms/group-recovery-password/group-recovery-password.component';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [GroupRecoveryPasswordComponent, CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
