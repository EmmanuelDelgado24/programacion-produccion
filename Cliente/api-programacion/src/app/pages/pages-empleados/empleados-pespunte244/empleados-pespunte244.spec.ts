import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPespunte244 } from './empleados-pespunte244';

describe('EmpleadosPespunte244', () => {
  let component: EmpleadosPespunte244;
  let fixture: ComponentFixture<EmpleadosPespunte244>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPespunte244]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPespunte244);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
