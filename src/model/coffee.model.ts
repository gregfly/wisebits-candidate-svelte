import type { ICoffee } from 'src/interface/icoffee.interface';

export class Coffee implements ICoffee {
  public notes: string[];

  constructor(
    public id: number,
    public uid: string,
    public blend_name: string,
    public origin: string,
    public variety: string,
    notes: string[]|string,
    public intensifier: string,
    public img: string
  ) {
    if (Array.isArray(notes)) {
      this.notes = notes;
    } else {
      this.notes = notes.split(', ');
    }
  }
}