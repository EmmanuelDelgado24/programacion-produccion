import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPespunte245 } from './empleados-pespunte245';

describe('EmpleadosPespunte245', () => {
  let component: EmpleadosPespunte245;
  let fixture: ComponentFixture<EmpleadosPespunte245>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPespunte245]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPespunte245);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
