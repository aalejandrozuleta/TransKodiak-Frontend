import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-user-company',
  standalone: true,
  imports: [],
  templateUrl: './image-user-company.component.html',
  styleUrl: './image-user-company.component.scss'
})
export class ImageUserCompanyComponent {
  @Input() logoImg:string = '';
}
