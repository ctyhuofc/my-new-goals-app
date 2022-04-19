import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementChildPage } from './achievement-child.page';

const routes: Routes = [
  {
    path: '',
    component: AchievementChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementChildPageRoutingModule {}
