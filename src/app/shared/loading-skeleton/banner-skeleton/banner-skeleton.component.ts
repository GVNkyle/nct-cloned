import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-skeleton.component.html',
  styleUrls: ['./banner-skeleton.component.scss']
})
export class BannerSkeletonComponent {

  constructor() { }
}
