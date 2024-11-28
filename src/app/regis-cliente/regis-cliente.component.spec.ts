import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisClienteComponent } from './regis-cliente.component';

describe('RegisClienteComponent', () => {
  let component: RegisClienteComponent;
  let fixture: ComponentFixture<RegisClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
