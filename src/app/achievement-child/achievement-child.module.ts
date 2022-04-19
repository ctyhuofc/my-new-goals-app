import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementChildPageRoutingModule } from './achievement-child-routing.module';

import { AchievementChildPage } from './achievement-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementChildPageRoutingModule
  ],
  declarations: [AchievementChildPage]
})
export class AchievementChildPageModule {}
