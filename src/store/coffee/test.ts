import { Store } from './index';
import { get } from 'svelte/store';
import type { ICoffee } from 'src/interface/icoffee.interface';

describe('Store Coffee', () => {
  test('Initializes ctor', () => {
    let store = new Store([{id: 1, uid: '', blend_name: '', origin: '', variety: '', notes: [], intensifier: '', img: ''}]);
    expect(get<ICoffee[]>(store).length).toEqual(1);
  });

  test('Adding coffee', () => {
    let store = new Store();

    store.add({id: 1, uid: '1', blend_name: '1', origin: '', variety: '', notes: [], intensifier: '', img: ''});
    expect(get<ICoffee[]>(store).length).toEqual(1);

    store.add({id: 2, uid: '2', blend_name: '2', origin: '', variety: '', notes: [], intensifier: '', img: ''});
    expect(get<ICoffee[]>(store).length).toEqual(2);
  });
});
