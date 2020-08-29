import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxParallaxScrollComponent } from './ngx-parallax-scroll.component';

describe('NgxParallaxScrollComponent', () => {
  let component: NgxParallaxScrollComponent;
  let fixture: ComponentFixture<NgxParallaxScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxParallaxScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxParallaxScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
