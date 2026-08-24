import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosCorte } from './modelos-corte';

describe('ModelosCorte', () => {
  let component: ModelosCorte;
  let fixture: ComponentFixture<ModelosCorte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosCorte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosCorte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
