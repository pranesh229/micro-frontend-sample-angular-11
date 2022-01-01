import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import { MicroAppHostDirective } from './micro-app-host.directive';

@Injectable({
  providedIn: 'root'
})
export class MicroAppLoaderService {
  renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  load(host: MicroAppHostDirective, url: string, tag: string): Observable<any> {
    const container = host.viewContainerRef;
    return new Observable(obs => {
      this.loadScript(url).subscribe(res => {
        const microAppElement = this.renderer.createElement(tag) as HTMLElement;
        this.renderer.appendChild(container.element.nativeElement, microAppElement);
        obs.next();
        obs.complete();
      }, err => {
        obs.error(err);
      })
    })
  }

  loadScript(url: string): Observable<any> {
    return new Observable(obs => {
      if (this.isScriptAvailableInDom(url)) {
        obs.next();
        obs.complete();
      } else {
        const element = this.renderer.createElement('script') as HTMLScriptElement;
        element.setAttribute('src', url);
        element.onload = () => {
          obs.next();
          obs.complete();
        }
        element.onerror = () => {
          obs.error('ScriptAvailableInDom');
        }
        this.renderer.appendChild(document.body, element);
      }
    })
  }
  isScriptAvailableInDom(url: string): boolean {
    const scriptElement = document.querySelector(`script[src='${url}']`);
    return scriptElement !== null;
  }
}
