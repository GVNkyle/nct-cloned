import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-skeleton.component.html',
  styleUrls: ['./explore-skeleton.component.scss']
})
export class ExploreSkeletonComponent {
  @Input() ratio: string;
  longArr = Array.apply(0, Array(12));
  constructor() { }
}
