import type { ICoffee } from 'src/interface/icoffee.interface';

export class Coffee implements ICoffee {
  constructor(
    public id: number,
    public uid: string,
    public blend_name: string,
    public origin: string,
    public variety: string,
    public notes: string[]|string,
    public intensifier: string,
    public img: string
  ) {
    if (!Array.isArray(this.notes)) {
      this.notes = this.notes.split(', ');
    }
  }
}