import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageTwo(): void {
    this.router.navigateByUrl('page-two')
  }
}
