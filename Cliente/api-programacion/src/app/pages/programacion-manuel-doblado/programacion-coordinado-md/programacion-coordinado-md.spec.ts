import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCoordinadoMd } from './programacion-coordinado-md';

describe('ProgramacionCoordinadoMd', () => {
  let component: ProgramacionCoordinadoMd;
  let fixture: ComponentFixture<ProgramacionCoordinadoMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCoordinadoMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCoordinadoMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
