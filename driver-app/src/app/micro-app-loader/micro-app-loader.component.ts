import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MicroAppHostDirective } from './micro-app-host.directive';
import { MicroAppLoaderService } from './micro-app-loader.service';

@Component({
  selector: 'app-micro-app-loader',
  templateUrl: './micro-app-loader.component.html',
  styleUrls: ['./micro-app-loader.component.scss']
})
export class MicroAppLoaderComponent implements AfterViewInit {
  @Input() tag: string = '';
  @Input() url: string = '';
  @ViewChild(MicroAppHostDirective)
  microAppHost!: MicroAppHostDirective;
  constructor(private microAppLoaderService: MicroAppLoaderService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.microAppLoaderService.load(this.microAppHost, this.url, this.tag).subscribe(res => {

      }, err => {

      })
    }, 20);
  }

}
