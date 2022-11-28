import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "NCT-Cloned"
    },
    children: [
      {
        path: "home",
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
        path: 'profile',
        canActivate: [AuthGuard],
        loadComponent: () => import('./views/profile/profile.component').then(c => c.ProfileComponent)
      },
      {
        path: 'history',
        loadComponent: () => import('./views/history/history.component').then(c => c.HistoryComponent)
      },
      {
        path: 'search',
        loadChildren: () => import('./views/search/search.module').then(m => m.SearchModule)
      },
      {
        path: '**',
        loadComponent: () => import('./views/error/error.component').then(c => c.ErrorComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
