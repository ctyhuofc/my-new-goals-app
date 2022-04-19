import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementParentPageRoutingModule } from './achievement-parent-routing.module';

import { AchievementParentPage } from './achievement-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementParentPageRoutingModule
  ],
  declarations: [AchievementParentPage]
})
export class AchievementParentPageModule {}
