import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMontadoAdorno } from './programacion-montado-adorno';

describe('ProgramacionMontadoAdorno', () => {
  let component: ProgramacionMontadoAdorno;
  let fixture: ComponentFixture<ProgramacionMontadoAdorno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionMontadoAdorno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionMontadoAdorno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
