import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecAsientosComponent } from './selec-asientos.component';

describe('SelecAsientosComponent', () => {
  let component: SelecAsientosComponent;
  let fixture: ComponentFixture<SelecAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecAsientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
