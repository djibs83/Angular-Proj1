import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input() appState: State;
  @HostBinding(`class`) nomClass: string;
  constructor() { }
ngOnInit() {
  console.log(this.appState);
  this.nomClass = this.formatClass(this.appState);

}
 private removeAccents(etat: string): string {
   return etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 }
private  formatClass(etat: State): string {
  return `state-${this.removeAccents(etat).toLowerCase().replace(/ /g, '')}`;
}

}




