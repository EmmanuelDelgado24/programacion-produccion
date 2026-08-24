import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPespunte246 } from './empleados-pespunte246';

describe('EmpleadosPespunte246', () => {
  let component: EmpleadosPespunte246;
  let fixture: ComponentFixture<EmpleadosPespunte246>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPespunte246]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPespunte246);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
