import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBanda4Md } from './formulario-banda4-md';

describe('FormularioBanda4Md', () => {
  let component: FormularioBanda4Md;
  let fixture: ComponentFixture<FormularioBanda4Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBanda4Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBanda4Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
