import { Component } from '@angular/core';

@Component({
  selector: 'ng-class-prova',
  templateUrl: './ng-class-prova.component.html',
  styleUrls: ['./ng-class-prova.component.css']
})
export class NgClassProvaComponent {
  persone = [
    {nome:"luca",cognome:"rossi", isOnline: true},
    {nome:"giovanni",cognome:"verdi", isOnline: false}
  ]
}
