import { Component } from '@angular/core';
import { LupaSearchNavCompanyComponent } from '@atoms/lupa-search-nav-company/lupa-search-nav-company.component';
import { SearchBarCompanyComponent } from '@atoms/search-bar-company/search-bar-company.component';

@Component({
  selector: 'app-block-search-bar-company',
  standalone: true,
  imports: [SearchBarCompanyComponent, LupaSearchNavCompanyComponent],
  templateUrl: './block-search-bar-company.component.html',
  styleUrl: './block-search-bar-company.component.scss',
})
export class BlockSearchBarCompanyComponent {}
