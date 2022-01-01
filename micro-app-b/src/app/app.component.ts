import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'micro-app-b';
  locationSub!: SubscriptionLike;
  constructor(private router: Router, private location: Location) {

    this.locationSub = this.location.subscribe(() => {
      this.router.navigateByUrl(this.location.path(true));
    })
    // this.router.initialNavigation();
    this.router.navigateByUrl(this.location.path(true));
  }
  ngOnDestroy(): void {
    this.locationSub.unsubscribe();
    this.router.dispose();
  }
}
