import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreRecommendMoviePage } from './more-recommend-movie.page';

const routes: Routes = [
  {
    path: '',
    component: MoreRecommendMoviePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreRecommendMoviePage]
})
export class MoreRecommendMoviePageModule {}
