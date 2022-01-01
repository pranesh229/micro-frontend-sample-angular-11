import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroAppLoaderComponent } from './micro-app-loader.component';

describe('MicroAppLoaderComponent', () => {
  let component: MicroAppLoaderComponent;
  let fixture: ComponentFixture<MicroAppLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroAppLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroAppLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
