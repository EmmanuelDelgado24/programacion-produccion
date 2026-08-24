import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosMontado } from './empleados-montado';

describe('EmpleadosMontado', () => {
  let component: EmpleadosMontado;
  let fixture: ComponentFixture<EmpleadosMontado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosMontado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosMontado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
