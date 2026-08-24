import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Montado } from './montado';

describe('Montado', () => {
  let component: Montado;
  let fixture: ComponentFixture<Montado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Montado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Montado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
