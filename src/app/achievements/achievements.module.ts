import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementsPageRoutingModule } from './achievements-routing.module';

import { AchievementsPage } from './achievements.page';
import { TaskPage } from '../task/task.page';
import { AchievementChildPage } from '../achievement-child/achievement-child.page';
import { AchievementGoalsPage } from '../achievement-goals/achievement-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementsPageRoutingModule
  ],
  declarations: [AchievementsPage, AchievementChildPage, AchievementGoalsPage]
})
export class AchievementsPageModule {}
