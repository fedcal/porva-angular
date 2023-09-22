import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-parent-child',
  templateUrl: './class-parent-child.component.html',
  styleUrls: ['./class-parent-child.component.css']
})
export class ClassParentChildComponent implements OnInit {
  @Input() data: any;

  constructor(){}

  ngOnInit(): void{
    console.log(this.data)
  }
  

}
