import { Component } from '@angular/core';
import { ImgSignInComponent } from '@atoms/img-sign-in/img-sign-in.component';
import { TextImgSignInComponent } from '@atoms/text-img-sign-in/text-img-sign-in.component';

@Component({
  selector: 'app-img-text-sign-in',
  standalone: true,
  imports: [ImgSignInComponent, TextImgSignInComponent],
  templateUrl: './img-text-sign-in.component.html',
  styleUrl: './img-text-sign-in.component.scss',
})
export class ImgTextSignInComponent {
  title: string = 'T R A N S K O D I A K';
  text: string =
   'Conectando Rutas impulsado oportunidades';
}
