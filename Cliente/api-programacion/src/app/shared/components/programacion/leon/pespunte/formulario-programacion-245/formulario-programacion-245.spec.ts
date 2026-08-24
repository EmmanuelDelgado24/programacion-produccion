import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProgramacion245 } from './formulario-programacion-245';

describe('FormularioProgramacion245', () => {
  let component: FormularioProgramacion245;
  let fixture: ComponentFixture<FormularioProgramacion245>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioProgramacion245]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProgramacion245);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
