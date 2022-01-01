import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPageTwoComponent } from './b-page-two.component';

describe('BPageTwoComponent', () => {
  let component: BPageTwoComponent;
  let fixture: ComponentFixture<BPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
