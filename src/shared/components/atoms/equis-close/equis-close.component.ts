import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-equis-close',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equis-close.component.html',
  styleUrl: './equis-close.component.scss'
})
export class EquisCloseComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}