import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreRecommendTvPage } from './more-recommend-tv.page';

const routes: Routes = [
  {
    path: '',
    component: MoreRecommendTvPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreRecommendTvPage]
})
export class MoreRecommendTvPageModule {}
