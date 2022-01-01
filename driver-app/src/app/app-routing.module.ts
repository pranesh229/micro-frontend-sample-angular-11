import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFiveComponent } from './pages/page-five/page-five.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    component: PageTwoComponent
  },

  {
    path: 'page-three',
    component: PageThreeComponent
  },

  {
    path: 'page-four',
    component: PageFourComponent
  },

  {
    path: 'page-five',
    component: PageFiveComponent
  },
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
