import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda5Md } from './formulario-banda5-md';

describe('FormularioBanda5Md', () => {
  let component: FormularioBanda5Md;
  let fixture: ComponentFixture<FormularioBanda5Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda5Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda5Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
