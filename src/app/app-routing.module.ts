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
        loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: "playlist",
        loadChildren: () => import('./views/playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: "song",
        loadChildren: () => import('./views/song/song.module').then(m => m.SongModule)
      },
      {
        path: 'video',
        loadChildren: () => import('./views/video/video.module').then(m => m.VideoModule)
      },
      {
        path: 'artist',
        loadChildren: () => import('./views/artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: 'topics',
        loadChildren: () => import('./views/topics/topics.module').then(m => m.TopicsModule)
      },
      {
        path: 'bxh',
        loadComponent: () => import('./views/chart/chart.component').then(c => c.ChartComponent)
      },
      {
        path: 'error',
        loadComponent: () => import('./views/error/error.component').then(c => c.ErrorComponent)
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
