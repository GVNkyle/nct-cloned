
import { Directive, ElementRef, Attribute, OnInit } from '@angular/core';

@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective implements OnInit {

  constructor(@Attribute('fontSize') public fontSize: string, private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = this.fontSize + 'px';
  }

}
