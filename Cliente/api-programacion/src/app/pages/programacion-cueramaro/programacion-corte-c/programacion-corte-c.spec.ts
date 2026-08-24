import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCorteC } from './programacion-corte-c';

describe('ProgramacionCorteC', () => {
  let component: ProgramacionCorteC;
  let fixture: ComponentFixture<ProgramacionCorteC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCorteC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCorteC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
