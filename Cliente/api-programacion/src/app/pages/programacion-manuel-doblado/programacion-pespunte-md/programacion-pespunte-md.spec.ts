import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionPespunteMd } from './programacion-pespunte-md';

describe('ProgramacionPespunteMd', () => {
  let component: ProgramacionPespunteMd;
  let fixture: ComponentFixture<ProgramacionPespunteMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionPespunteMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionPespunteMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
