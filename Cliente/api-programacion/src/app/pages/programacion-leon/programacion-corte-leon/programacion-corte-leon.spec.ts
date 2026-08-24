import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCorteLeon } from './programacion-corte-leon';

describe('ProgramacionCorteLeon', () => {
  let component: ProgramacionCorteLeon;
  let fixture: ComponentFixture<ProgramacionCorteLeon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCorteLeon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCorteLeon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
