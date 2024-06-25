import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImglupastateComponent } from '@atoms/imglupastate/imglupastate.component';
import { StateTextComponent } from '@atoms/state-text/state-text.component';
import { StateSegundaryTextComponent } from '@atoms/state-segundary-text/state-segundary-text.component';


@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule,
    StateTextComponent,
    ImglupastateComponent,
    StateSegundaryTextComponent
  ],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  @Input() imgSrc: string = ''; 
  @Input() mainText: string = ''; 
  @Input() secondaryText: string = ''; 
}
