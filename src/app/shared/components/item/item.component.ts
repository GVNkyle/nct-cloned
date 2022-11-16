import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { imgNotFound } from '@constants/constants';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() type: string;
  @Input() ratio: string = "1/1";
  link: string = '';
  imgNotFound = imgNotFound;
  constructor() { }

  ngOnInit(): void {
    this.link = this.item.type ?
      `/${this.item.type}/${this.item.key}` :
      this.type ?
        `/${this.type}/${this.item.key}` :
        "#"
  }

  handleSong() {
    // do something
  }

}
