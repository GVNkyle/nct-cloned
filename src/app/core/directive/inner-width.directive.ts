import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appInnerWidth]',
  exportAs: 'windowWidth',
  standalone: true
})
export class InnerWidthDirective implements OnInit {
  width: number;
  isPC: boolean;
  isTablet: boolean;
  isMobile: boolean;
  constructor() { }

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.width = window.innerWidth;
    this.isPC = this.width > 1024;
    this.isTablet = this.width > 768;
    this.isMobile = this.width > 640;
  }

}
