import { NgModule } from '@angular/core';
import { NgxParallaxScrollDirective } from './ngx-parallax-scroll.directive';
import { NgxParallaxScrollComponent } from './ngx-parallax-scroll/ngx-parallax-scroll.component';

@NgModule({
  declarations: [
    NgxParallaxScrollDirective,
    NgxParallaxScrollComponent,
  ],
  imports: [
  ],
  exports: [
    NgxParallaxScrollDirective,
    NgxParallaxScrollComponent,
  ]
})
export class NgxParallaxScrollModule { }
