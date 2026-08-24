import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pespunte } from './pespunte';

describe('Pespunte', () => {
  let component: Pespunte;
  let fixture: ComponentFixture<Pespunte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pespunte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pespunte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
