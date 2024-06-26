import { Component } from '@angular/core';
import { ImgTextSignInComponent } from '@molecules/img-text-sign-in/img-text-sign-in.component';
import { FormSignInComponent } from '@organisms/form-sign-in/form-sign-in.component';

@Component({
  selector: 'app-img-form-sign-in',
  standalone: true,
  imports: [ImgTextSignInComponent, FormSignInComponent],
  templateUrl: './img-form-sign-in.component.html',
  styleUrl: './img-form-sign-in.component.scss',
})
export class ImgFormSignInComponent {}
