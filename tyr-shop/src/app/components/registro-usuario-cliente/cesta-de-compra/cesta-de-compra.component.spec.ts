import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaDeCompraComponent } from './cesta-de-compra.component';

describe('CestaDeCompraComponent', () => {
  let component: CestaDeCompraComponent;
  let fixture: ComponentFixture<CestaDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestaDeCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestaDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
