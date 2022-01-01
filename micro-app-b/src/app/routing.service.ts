import { HashLocationStrategy, Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService extends HashLocationStrategy {

  prepareExternalUrl(path: string): string {
    const url = Location.joinWithSlash('', path);
    return url.length > 0 ? (window as any).baseHref + '#' + url : url;
  }
}
