import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "NCT-Cloned"
    },
    children: [
      {
        path: "",
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: "playlist",
        loadChildren: () => import('./views/playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: "song",
        loadChildren: () => import('./views/song/song.module').then(m => m.SongModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
