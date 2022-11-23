import { Directive, HostListener, OnDestroy } from "@angular/core";

@Directive({
  selector: '[appClickStopPropagation]',
  standalone: true
})
export class ClickStopPropagationDirective implements OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    document.removeEventListener('click', this.onClick, false);
  }

  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }

}
