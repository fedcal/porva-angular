import { Component } from '@angular/core';

@Component({
  selector: 'ng-style-prova',
  templateUrl: './ng-style-prova.component.html',
  styleUrls: ['./ng-style-prova.component.css']
})
export class NgStyleProvaComponent {
  persone = [
    {nome:"luca",cognome:"rossi", isOnline: true},
    {nome:"giovanni",cognome:"verdi", isOnline: false}
  ]

}
