import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'class-parent-child',
  templateUrl: './class-parent-child.component.html',
  styleUrls: ['./class-parent-child.component.css']
})
export class ClassParentChildComponent implements OnInit {
  @Input() data: any;

  @Output() ritornoComponente = new EventEmitter<string>()

  constructor(){}

  ngOnInit(): void{
    console.log(this.data)
  }

  restituisci(){
    this.ritornoComponente.emit("ciao")
  }
  

}
