import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appInnerWidth]',
  exportAs: 'windowWidth',
  standalone: true,
})
export class InnerWidthDirective implements OnInit {
  width: number;
  type: string
  constructor() { }

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.width = window.innerWidth;
    if (this.width > 1024) {
      this.type = 'PC'
    } else if (this.width > 768) {
      this.type = 'Tablet'
    } else if (this.width > 640) {
      this.type = 'Mobile'
    }

  }

}
