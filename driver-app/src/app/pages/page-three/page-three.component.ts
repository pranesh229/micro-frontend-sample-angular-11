import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageFour(): void {
    this.router.navigateByUrl('page-four')
  }
  goToPageTwo(): void {
    this.router.navigateByUrl('page-two')
  }
}
