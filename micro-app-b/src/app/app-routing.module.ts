import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BPageOneComponent } from './pages/b-page-one/b-page-one.component';
import { BPageTwoComponent } from './pages/b-page-two/b-page-two.component';
import { RoutingService } from './routing.service';
const routes: Routes = [{
  path: 'b-page-one',
  component: BPageOneComponent
},
{
  path: 'b-page-two',
  component: BPageTwoComponent
},
{
  path: '',
  redirectTo: 'b-page-one',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: LocationStrategy, useClass: RoutingService
  }]
})
export class AppRoutingModule { }
