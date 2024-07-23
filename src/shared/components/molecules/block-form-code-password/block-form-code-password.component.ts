import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonNextCodePasswordComponent } from '@atoms/button-next-code-password/button-next-code-password.component';
import { ValuesInputCodePasswordService } from '@services/values-input-code-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-form-code-password',
  standalone: true,
  imports: [ButtonNextCodePasswordComponent, CommonModule],
  templateUrl: './block-form-code-password.component.html',
  styleUrl: './block-form-code-password.component.scss'
})
export class BlockFormCodePasswordComponent {

  constructor(
    private valuesInputCodePasswordService: ValuesInputCodePasswordService,
    private router: Router
  ) {}
  saveDateRegister() {
    this.valuesInputCodePasswordService.onClick();
    this.router.navigate(['/iniciarSesion']);
  }
}
