import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionPespunteC } from './programacion-pespunte-c';

describe('ProgramacionPespunteC', () => {
  let component: ProgramacionPespunteC;
  let fixture: ComponentFixture<ProgramacionPespunteC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionPespunteC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionPespunteC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
