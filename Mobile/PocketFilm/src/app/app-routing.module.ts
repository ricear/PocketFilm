import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'movie-detail', loadChildren: './movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'more-movie', loadChildren: './more-movie/more-movie.module#MoreMoviePageModule' },
  { path: 'search-movie', loadChildren: './search-movie/search-movie.module#SearchMoviePageModule' },
  { path: 'tv-detail', loadChildren: './tv-detail/tv-detail.module#TvDetailPageModule' },
  { path: 'more-tv', loadChildren: './more-tv/more-tv.module#MoreTvPageModule' },
  { path: 'search-tv', loadChildren: './search-tv/search-tv.module#SearchTvPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'input-password', loadChildren: './input-password/input-password.module#InputPasswordPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'drama-detail', loadChildren: './drama-detail/drama-detail.module#DramaDetailPageModule' },
  { path: 'search-drama', loadChildren: './search-drama/search-drama.module#SearchDramaPageModule' },
  { path: 'piece', loadChildren: './piece/piece.module#PiecePageModule' },
  { path: 'piece-detail', loadChildren: './piece-detail/piece-detail.module#PieceDetailPageModule' },
  { path: 'search-piece', loadChildren: './search-piece/search-piece.module#SearchPiecePageModule' },
  { path: 'browse-record', loadChildren: './browse-record/browse-record.module#BrowseRecordPageModule' },
  { path: 'about-app', loadChildren: './about-app/about-app.module#AboutAppPageModule' },
  { path: 'more-recommend-movie', loadChildren: './more-recommend-movie/more-recommend-movie.module#MoreRecommendMoviePageModule' },
  { path: 'more-recommend-tv', loadChildren: './more-recommend-tv/more-recommend-tv.module#MoreRecommendTvPageModule' },
  { path: 'play', loadChildren: './play/play.module#PlayPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
