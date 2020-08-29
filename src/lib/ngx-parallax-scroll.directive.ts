import { Directive, Input, ElementRef, HostListener, Inject, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[parallax-img]'
})
export class NgxParallaxScrollDirective implements AfterViewInit {
  @Input() ratio: number = 1

  container: any

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngAfterViewInit() {
    this.container = this.findContainer()
  }

  private findContainer(): any {
    let el = this._el.nativeElement
    while (el) {
      el = el.parentNode;
      if (el.classList.contains('parallax-container')) {
        break
      }
    }
    return el
  }

  @HostListener('window:scroll')
  updateParallax() {
    let imgHeight = this._el.nativeElement.offsetHeight;
    let containerHeight = this.container.offsetHeight
    let bottom = this.container.offsetTop + containerHeight;
    let top = this.container.offsetTop;
    let scrollTop = window.pageYOffset
      || this.document.documentElement.scrollTop
      || this.document.body.scrollTop || 0;
    let windowHeight = window.innerHeight;
    let windowBottom = scrollTop + windowHeight;
    let parallaxDist = imgHeight - containerHeight;
    let percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
    let parallax = parallaxDist * percentScrolled * this.ratio;
    if (this.ratio < 0) {
      parallax += parallaxDist
    }
    if (bottom > scrollTop && top < scrollTop + windowHeight) {
      this._renderer.setStyle(this._el.nativeElement, 'transform', `translate3D(-50%, ${parallax}px, 0)`)
    }
  }

  @HostListener('load')
  onLoad() {
    this.updateParallax()
  }

}
