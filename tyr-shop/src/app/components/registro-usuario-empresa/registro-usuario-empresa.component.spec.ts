import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuarioEmpresaComponent } from './registro-usuario-empresa.component';

describe('RegistroUsuarioEmpresaComponent', () => {
  let component: RegistroUsuarioEmpresaComponent;
  let fixture: ComponentFixture<RegistroUsuarioEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
