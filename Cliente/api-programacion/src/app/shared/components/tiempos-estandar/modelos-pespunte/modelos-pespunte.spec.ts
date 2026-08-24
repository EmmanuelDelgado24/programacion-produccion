import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPespunte } from './modelos-pespunte';

describe('ModelosPespunte', () => {
  let component: ModelosPespunte;
  let fixture: ComponentFixture<ModelosPespunte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosPespunte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosPespunte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
