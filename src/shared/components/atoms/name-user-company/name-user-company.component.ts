import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-user-company',
  standalone: true,
  imports: [],
  templateUrl: './name-user-company.component.html',
  styleUrl: './name-user-company.component.scss'
})
export class NameUserCompanyComponent {
  @Input() nameUser:string = '';
}
