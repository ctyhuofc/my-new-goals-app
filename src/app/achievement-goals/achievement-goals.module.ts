import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementGoalsPageRoutingModule } from './achievement-goals-routing.module';

import { AchievementGoalsPage } from './achievement-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementGoalsPageRoutingModule
  ],
  declarations: [AchievementGoalsPage]
})
export class AchievementGoalsPageModule {}
