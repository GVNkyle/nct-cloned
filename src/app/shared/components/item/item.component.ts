import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { imgNotFound } from '@constants/utils';
import { setSongId } from '@stores/player/player.actions';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() type?: string;
  @Input() ratio?: string = "1/1";
  link: string = '';
  imgNotFound = imgNotFound;
  constructor(private store: Store<{ player }>) { }

  ngOnInit(): void {
    this.link = this.item.type ?
      `/${this.item.type.toLowerCase()}/${this.item.key}` :
      this.type ?
        `/${this.type}/${this.item.key}` :
        "#"
  }

  handleSong(key: any) {
    if (this.type !== "songs") {
      return;
    }

    this.store.dispatch(setSongId({ songIds: key }));
  }

}
