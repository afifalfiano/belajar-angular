import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

// /user/afif/articles
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'style'
  },
  {
    path: 'style',
    component: EncapsulationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
