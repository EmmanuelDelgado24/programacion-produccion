import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCoordinado } from './programacion-coordinado';

describe('ProgramacionCoordinado', () => {
  let component: ProgramacionCoordinado;
  let fixture: ComponentFixture<ProgramacionCoordinado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCoordinado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCoordinado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
