import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMontadoLeon } from './programacion-montado-leon';

describe('ProgramacionMontadoLeon', () => {
  let component: ProgramacionMontadoLeon;
  let fixture: ComponentFixture<ProgramacionMontadoLeon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionMontadoLeon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionMontadoLeon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
