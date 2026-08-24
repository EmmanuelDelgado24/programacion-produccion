import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorteMd } from './formulario-corte-md';

describe('FormularioCorteMd', () => {
  let component: FormularioCorteMd;
  let fixture: ComponentFixture<FormularioCorteMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCorteMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCorteMd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
