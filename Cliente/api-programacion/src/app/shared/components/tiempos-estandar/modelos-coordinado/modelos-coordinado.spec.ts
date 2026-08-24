import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosCoordinado } from './modelos-coordinado';

describe('ModelosCoordinado', () => {
  let component: ModelosCoordinado;
  let fixture: ComponentFixture<ModelosCoordinado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosCoordinado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosCoordinado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
