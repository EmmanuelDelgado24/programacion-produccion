import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corte } from './corte';

describe('Corte', () => {
  let component: Corte;
  let fixture: ComponentFixture<Corte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
