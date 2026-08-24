import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionInyeccionMd } from './programacion-inyeccion-md';

describe('ProgramacionInyeccionMd', () => {
  let component: ProgramacionInyeccionMd;
  let fixture: ComponentFixture<ProgramacionInyeccionMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionInyeccionMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionInyeccionMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
