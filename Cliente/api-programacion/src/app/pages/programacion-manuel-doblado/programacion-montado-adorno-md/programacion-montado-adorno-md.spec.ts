import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionMontadoAdornoMd } from './programacion-montado-adorno-md';

describe('ProgramacionMontadoAdornoMd', () => {
  let component: ProgramacionMontadoAdornoMd;
  let fixture: ComponentFixture<ProgramacionMontadoAdornoMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionMontadoAdornoMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionMontadoAdornoMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
