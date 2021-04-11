import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Child2Component } from './parent/child2/child2.component';
import { Child3Component } from './parent/child3/child3.component';
import { Child4Component } from './parent/child3/child4/child4.component';
import { Child5Component } from './parent/child3/child4/child5/child5.component';
import { Child6Component } from './parent/child6/child6.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
