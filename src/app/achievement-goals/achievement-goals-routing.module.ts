import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementGoalsPage } from './achievement-goals.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementGoalsPageRoutingModule {}
