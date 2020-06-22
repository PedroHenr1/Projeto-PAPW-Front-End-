import { TestBed } from '@angular/core/testing';

import { ItemCarrinhoService } from './item-carrinho.service';

describe('ItemCarrinhoService', () => {
  let service: ItemCarrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCarrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
