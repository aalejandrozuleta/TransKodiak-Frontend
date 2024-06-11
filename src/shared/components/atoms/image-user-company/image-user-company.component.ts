import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserPerfilOptionsComponent } from '@organisms/user-perfil-options/user-perfil-options.component';
import { UserOptionsPerfilService } from '@services/user-options-perfil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-user-company',
  standalone: true,
  imports: [CommonModule, UserPerfilOptionsComponent],
  templateUrl: './image-user-company.component.html',
  styleUrl: './image-user-company.component.scss',
})
export class ImageUserCompanyComponent implements OnInit, OnDestroy {
  @Input() logoImg: string = '';

  modal: boolean = false;
  private subscription: Subscription = Subscription.EMPTY;

  constructor(private userOptionsPerfilService: UserOptionsPerfilService) {}

  ngOnInit() {
    this.subscription = this.userOptionsPerfilService.modalStatus$.subscribe(status => {
      this.modal = status;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModal() {
    this.userOptionsPerfilService.openModal();
  }
}
