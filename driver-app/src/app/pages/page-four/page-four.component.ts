import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  constructor(private router: Router) {
    (window as any).baseHref = 'page-four';
  }



  ngOnInit(): void {
  }
  goToPageFive(): void {
    this.router.navigateByUrl('page-five')
  }
  goToPageThree(): void {
    this.router.navigateByUrl('page-three')
  }
}
