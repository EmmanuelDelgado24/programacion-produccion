import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preacabado } from './preacabado';

describe('Preacabado', () => {
  let component: Preacabado;
  let fixture: ComponentFixture<Preacabado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preacabado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preacabado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
