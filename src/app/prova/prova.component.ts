import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit, AfterContentChecked,AfterContentInit,
AfterViewChecked,AfterViewInit,DoCheck,OnDestroy{

  cani = [
    {
      nome:'roger',
      razza:'golden',
      descrizione: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aliquam repudiandae a, accusamus alias dignissimos laudantium molestiae 
                    dolorem eligendi qui itaque.`
    },
    {
      nome:'sdfasdf',
      razza:'golasdfden',
      descrizione: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aliquam repudiandae a, accusamus alias dignissimos laudantium molestiae 
                    dolorem eligendi qui itaque.`
    }
  ]

  isDisabled = true;
  title = 'pesceGatto'

  constructor(){
    console.log('Costruttore')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngOnInit(): void {
    console.log(('ngOnInit'));
  }

  onClick(e: any){console.log(e)}

}
