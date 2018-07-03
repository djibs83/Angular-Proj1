import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'william',
    reference: '1234',
    state: State.ALIVRER
  },
  {
   id: 'b1',
    name: 'djibs',
    reference: '1234',
    state: State.ENCOURS
  },
  {
    id: 'a1',
    name: 'laeticia',
    reference: '1234',
    state: State.LIVREE
  }

];


