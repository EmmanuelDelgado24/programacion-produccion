import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMontado1Md } from './formulario-montado1-md';

describe('FormularioMontado1Md', () => {
  let component: FormularioMontado1Md;
  let fixture: ComponentFixture<FormularioMontado1Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMontado1Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMontado1Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
