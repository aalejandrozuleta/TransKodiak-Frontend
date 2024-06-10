import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateModalTransporter } from './create-modal-transporter.component';

describe('CreateModalTransporterComponent', () => {
  let component: CreateModalTransporter;
  let fixture: ComponentFixture<CreateModalTransporter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModalTransporter]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateModalTransporter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
