import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GroupCodePasswordComponent } from '@organisms/group-code-password/group-code-password.component';

@Component({
  selector: 'app-forget-password-code',
  standalone: true,
  imports: [GroupCodePasswordComponent, CommonModule],
  templateUrl: './forget-password-code.component.html',
  styleUrl: './forget-password-code.component.scss'
})
export class ForgetPasswordCodeComponent {

}
