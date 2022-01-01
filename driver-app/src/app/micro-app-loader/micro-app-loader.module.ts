import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroAppLoaderComponent } from './micro-app-loader.component';
import { MicroAppHostDirective } from './micro-app-host.directive';



@NgModule({
  declarations: [MicroAppLoaderComponent,
    MicroAppHostDirective],
  imports: [
    CommonModule
  ],
  exports: [MicroAppLoaderComponent]
})
export class MicroAppLoaderModule { }
