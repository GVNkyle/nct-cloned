import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appClickStopPropagation]',
  standalone: true
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }

}
