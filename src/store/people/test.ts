import {type Person, Store} from './index';
import { get } from "svelte/store";

describe('Store People', () => {
  test('Initializes ctor', () => {
    let people = new Store([{id: 1, name: 'Rich Harris'}])
    expect(get<Person[]>(people).length).toEqual(1);
  });

  test('Adding people', () => {
    let people = new Store();

    people.add('Nelson Mandela');
    expect(get<Person[]>(people).length).toEqual(1);

    people.add('Marie Curie');
    expect(get<Person[]>(people).length).toEqual(2);
  });
});
