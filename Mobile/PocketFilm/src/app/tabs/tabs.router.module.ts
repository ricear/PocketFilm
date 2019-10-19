import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'film',
        children: [
          {
            path: '',
            loadChildren: '../film/film.module#FilmPageModule'
          }
        ]
      },
      {
        path: 'tv',
        children: [
          {
            path: '',
            loadChildren: '../tv/tv.module#TvPageModule'
          }
        ]
      },
      {
        path: 'drama',
        children: [
          {
            path: '',
            loadChildren: '../drama/drama.module#DramaPageModule'
          }
        ]
      },
      {
        path: 'piece',
        children: [
          {
            path: '',
            loadChildren: '../piece/piece.module#PiecePageModule'
          }
        ]
      },
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: '../personal/personal.module#PersonalPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/film',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
