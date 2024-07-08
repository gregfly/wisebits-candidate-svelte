import { Store } from './index';

describe('Store Notifications', () => {
  test('Initializes ctor', () => {
    let store = new Store();
    expect(store.length()).toEqual(0);
  });

  test('Show notification', () => {
    let store = new Store();

    store.show({message: 'message 1', duration: 0});
    expect(store.length()).toEqual(1);

    store.show({message: 'message 2', duration: 0});
    expect(store.length()).toEqual(2);
  });

  test('Remove notification', () => {
    let store = new Store();

    let n1 = {message: 'message 1', duration: 0};
    let n2 = {message: 'message 2', duration: 0};
    store.show(n1);
    store.show(n2);

    expect(store.length()).toEqual(2);

    store.remove(n1);
    expect(store.length()).toEqual(1);

    store.remove(n1);
    expect(store.length()).toEqual(1);

    store.remove(n2);
    expect(store.length()).toEqual(0);
  });
});
