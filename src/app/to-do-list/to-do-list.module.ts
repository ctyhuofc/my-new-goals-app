import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskPage } from '../task/task.page';

import { IonicModule } from '@ionic/angular';

import { ToDoListPageRoutingModule } from './to-do-list-routing.module';

import { ToDoListPage } from './to-do-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListPageRoutingModule,
  ],
  declarations: [ToDoListPage, TaskPage]
})
export class ToDoListPageModule {}
