import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPageOneComponent } from './b-page-one.component';

describe('BPageOneComponent', () => {
  let component: BPageOneComponent;
  let fixture: ComponentFixture<BPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
