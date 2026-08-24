import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPreacabado } from './modelos-preacabado';

describe('ModelosPreacabado', () => {
  let component: ModelosPreacabado;
  let fixture: ComponentFixture<ModelosPreacabado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosPreacabado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosPreacabado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
