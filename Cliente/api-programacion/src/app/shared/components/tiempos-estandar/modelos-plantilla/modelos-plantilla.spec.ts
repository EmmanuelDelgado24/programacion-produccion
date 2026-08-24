import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPlantilla } from './modelos-plantilla';

describe('ModelosPlantilla', () => {
  let component: ModelosPlantilla;
  let fixture: ComponentFixture<ModelosPlantilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosPlantilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosPlantilla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
