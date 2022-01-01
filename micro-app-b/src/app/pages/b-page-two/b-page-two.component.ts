import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-page-two',
  templateUrl: './b-page-two.component.html',
  styleUrls: ['./b-page-two.component.scss']
})
export class BPageTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPageOne(): void {
    this.router.navigateByUrl('b-page-one');
  }
}
