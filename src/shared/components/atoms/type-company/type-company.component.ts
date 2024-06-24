import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-company',
  standalone: true,
  imports: [],
  templateUrl: './type-company.component.html',
  styleUrl: './type-company.component.scss',
})
export class TypeCompanyComponent {
  @Input() typeCompany: string = '';
}
