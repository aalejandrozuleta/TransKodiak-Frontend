import { Component } from '@angular/core';
import { BlockColorFormComponent } from '@templates/block-color-form/block-color-form.component';
import { HeaderComponent } from '@organisms/header/header.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HeaderComponent, BlockColorFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {}
