import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { firstValueFrom, tap } from 'rxjs';
import { NgxNotiflixService } from '@services/ngx-notiflix.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private store: Store<{ auth }>, private notiflixService: NgxNotiflixService) { }

  async ngOnInit(): Promise<void> {
    await firstValueFrom(this.store.select('auth').pipe(tap(state => this.currentUser = state.currentUser)));
  }

  handleUpdate() {
    this.notiflixService.error('Tính năng chưa có!');
  }

}
