import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-parallax-scroll',
  templateUrl: './ngx-parallax-scroll.component.html',
  styleUrls: ['./ngx-parallax-scroll.component.scss']
})
export class NgxParallaxScrollComponent implements AfterViewInit {

  @Input() styleClass: string;

  @ViewChild('container') container: ElementRef

  constructor(
    private _renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    this.styleClass.split(/\s+/g).forEach(style => {
      this._renderer.addClass(this.container.nativeElement, style)
    })
  }

}
