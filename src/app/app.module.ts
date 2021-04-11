import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { ShadowDomComponent } from './encapsulation/shadow-dom/shadow-dom.component';
import { NoneComponent } from './encapsulation/none/none.component';
import { EmulatedComponent } from './encapsulation/emulated/emulated.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    ShadowDomComponent,
    NoneComponent,
    EmulatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
