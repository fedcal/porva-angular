import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NgIfProvaComponent } from './ng-if-prova/ng-if-prova.component';
import { NgForProvaComponent } from './ng-for-prova/ng-for-prova.component';
import { NgSwitchProvaComponent } from './ng-switch-prova/ng-switch-prova.component';
import { NgStyleProvaComponent } from './ng-style-prova/ng-style-prova.component';
import { NgClassProvaComponent } from './ng-class-prova/ng-class-prova.component';
import { ClassParentChildComponent } from './class-parent-child/class-parent-child.component';

@NgModule({
  declarations: [AppComponent, ProvaComponent, FormComponent, NgIfProvaComponent, NgForProvaComponent, NgSwitchProvaComponent, NgStyleProvaComponent, NgClassProvaComponent, ClassParentChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
