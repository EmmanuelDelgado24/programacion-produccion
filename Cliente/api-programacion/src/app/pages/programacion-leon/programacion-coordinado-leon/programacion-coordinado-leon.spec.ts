import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCoordinadoLeon } from './programacion-coordinado-leon';

describe('ProgramacionCoordinadoLeon', () => {
  let component: ProgramacionCoordinadoLeon;
  let fixture: ComponentFixture<ProgramacionCoordinadoLeon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCoordinadoLeon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCoordinadoLeon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
