import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionPlantillaMd } from './programacion-plantilla-md';

describe('ProgramacionPlantillaMd', () => {
  let component: ProgramacionPlantillaMd;
  let fixture: ComponentFixture<ProgramacionPlantillaMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacionPlantillaMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionPlantillaMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
