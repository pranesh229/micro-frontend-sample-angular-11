import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMicroAppHost]'
})
export class MicroAppHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
