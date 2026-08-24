import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCorte } from './programacion-corte';

describe('ProgramacionCorte', () => {
  let component: ProgramacionCorte;
  let fixture: ComponentFixture<ProgramacionCorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCorte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
