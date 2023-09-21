import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-prova',
  templateUrl: './ng-for-prova.component.html',
  styleUrls: ['./ng-for-prova.component.css']
})
export class NgForProvaComponent {
  persone = [
    {nome:"luca",cognome:"rossi"},
    {nome:"giovanni",cognome:"verdi"}
  ]

}
