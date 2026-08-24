import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionCorteMd } from './programacion-corte-md';

describe('ProgramacionCorteMd', () => {
  let component: ProgramacionCorteMd;
  let fixture: ComponentFixture<ProgramacionCorteMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionCorteMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionCorteMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
