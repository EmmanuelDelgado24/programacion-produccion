import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosMontado } from './modelos-montado';

describe('ModelosMontado', () => {
  let component: ModelosMontado;
  let fixture: ComponentFixture<ModelosMontado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelosMontado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosMontado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
