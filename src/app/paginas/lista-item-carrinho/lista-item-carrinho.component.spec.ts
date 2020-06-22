import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemCarrinhoComponent } from './lista-item-carrinho.component';

describe('ListaItemCarrinhoComponent', () => {
  let component: ListaItemCarrinhoComponent;
  let fixture: ComponentFixture<ListaItemCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
