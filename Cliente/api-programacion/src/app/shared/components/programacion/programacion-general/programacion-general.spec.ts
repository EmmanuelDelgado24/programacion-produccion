import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionGeneral } from './programacion-general';

describe('ProgramacionGeneral', () => {
  let component: ProgramacionGeneral;
  let fixture: ComponentFixture<ProgramacionGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionGeneral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
