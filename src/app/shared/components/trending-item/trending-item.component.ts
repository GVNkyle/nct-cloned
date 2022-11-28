import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trending-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent{
  @Input() position: number;
  @Input() name: string;
  constructor() { }

}
