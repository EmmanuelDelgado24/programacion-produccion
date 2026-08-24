import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPespunte242 } from './empleados-pespunte242';

describe('EmpleadosPespunte', () => {
  let component: EmpleadosPespunte242;
  let fixture: ComponentFixture<EmpleadosPespunte242>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPespunte242]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPespunte242);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
