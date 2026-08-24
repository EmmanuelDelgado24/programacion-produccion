import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda7Md } from './formulario-banda7-md';

describe('FormularioBanda7Md', () => {
  let component: FormularioBanda7Md;
  let fixture: ComponentFixture<FormularioBanda7Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda7Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda7Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
