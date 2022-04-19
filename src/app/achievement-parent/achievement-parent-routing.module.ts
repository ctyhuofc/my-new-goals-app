import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementParentPage } from './achievement-parent.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementParentPageRoutingModule {}
