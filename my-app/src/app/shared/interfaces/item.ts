import { State } from '../enums/state.enum';

export interface Item {
  id: string;
  name: string;
  reference: String;
  state: State;
}
