import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { img404 } from '@constants/utils';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  img404 = img404;
  constructor() { }
}
