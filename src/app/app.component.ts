import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-angular';
  persone = [
    {nome:"luca",cognome:"rossi", isOnline: true, color:"yellow"},
    {nome:"giovanni",cognome:"verdi", isOnline: false, color:"red"}
  ]
}
