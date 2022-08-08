import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionDeProductosComponent } from './visualizacion-de-productos.component';

describe('VisualizacionDeProductosComponent', () => {
  let component: VisualizacionDeProductosComponent;
  let fixture: ComponentFixture<VisualizacionDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionDeProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
