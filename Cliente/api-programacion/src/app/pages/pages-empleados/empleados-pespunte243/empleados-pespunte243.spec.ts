import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPespunte243 } from './empleados-pespunte243';

describe('EmpleadosPespunte243', () => {
  let component: EmpleadosPespunte243;
  let fixture: ComponentFixture<EmpleadosPespunte243>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPespunte243]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPespunte243);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
