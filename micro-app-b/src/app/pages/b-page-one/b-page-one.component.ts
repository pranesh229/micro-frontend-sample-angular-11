import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-page-one',
  templateUrl: './b-page-one.component.html',
  styleUrls: ['./b-page-one.component.scss']
})
export class BPageOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageTwo(): void {
    this.router.navigateByUrl('b-page-two');
  }
}
