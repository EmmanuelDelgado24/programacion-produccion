import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCoordinadoC } from './programacion-coordinado-c';

describe('ProgramacionCoordinadoC', () => {
  let component: ProgramacionCoordinadoC;
  let fixture: ComponentFixture<ProgramacionCoordinadoC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCoordinadoC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCoordinadoC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
