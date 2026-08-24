import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMontadoAdornoC } from './programacion-montado-adorno-c';

describe('ProgramacionMontadoAdornoC', () => {
  let component: ProgramacionMontadoAdornoC;
  let fixture: ComponentFixture<ProgramacionMontadoAdornoC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionMontadoAdornoC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionMontadoAdornoC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
