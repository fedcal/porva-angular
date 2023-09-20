import {Component} from '@angular/core';



@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  title = 'corso-angular';
  isVisible = false;

  onInput(e: Event){
    this.title=(<HTMLInputElement>e.target).value
  }

  onClick(e: Event){
    this.title='Ho schiacciato sul bottone';
  }

}
