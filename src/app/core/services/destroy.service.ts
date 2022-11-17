import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestroyService implements OnDestroy {
  destroys$: Subject<void> = new Subject();
  constructor() { }
  ngOnDestroy(): void {
    this.destroys$.next();
    this.destroys$.complete();
  }
}
