import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionDeEmpresasComponent } from './visualizacion-de-empresas.component';

describe('VisualizacionDeEmpresasComponent', () => {
  let component: VisualizacionDeEmpresasComponent;
  let fixture: ComponentFixture<VisualizacionDeEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionDeEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionDeEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
