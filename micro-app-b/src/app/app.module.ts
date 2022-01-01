import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BPageOneComponent } from './pages/b-page-one/b-page-one.component';
import { BPageTwoComponent } from './pages/b-page-two/b-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    BPageOneComponent,
    BPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: (window as any).baseHref }]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-micro-app-b', elm);
  }
}
