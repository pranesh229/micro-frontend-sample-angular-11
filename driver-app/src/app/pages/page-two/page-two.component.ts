import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  constructor(private router: Router) {
    (window as any).baseHref = 'page-two';
  }



  ngOnInit(): void {
  }
  goToPageOne(): void {
    this.router.navigateByUrl('page-one')
  }
  goToPageThree(): void {
    this.router.navigateByUrl('page-three')
  }
}
