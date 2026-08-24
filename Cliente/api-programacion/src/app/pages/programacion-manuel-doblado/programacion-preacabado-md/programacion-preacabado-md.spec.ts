import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionPreacabadoMd } from './programacion-preacabado-md';

describe('ProgramacionPreacabadoMd', () => {
  let component: ProgramacionPreacabadoMd;
  let fixture: ComponentFixture<ProgramacionPreacabadoMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionPreacabadoMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionPreacabadoMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
