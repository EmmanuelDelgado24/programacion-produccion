import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMontado4Md } from './formulario-montado4-md';

describe('FormularioMontado4Md', () => {
  let component: FormularioMontado4Md;
  let fixture: ComponentFixture<FormularioMontado4Md>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMontado4Md]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMontado4Md);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
