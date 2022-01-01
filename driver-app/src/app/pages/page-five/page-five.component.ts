import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.scss']
})
export class PageFiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageFour(): void {
    this.router.navigateByUrl('page-four')
  }

}
