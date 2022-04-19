import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'To Do List', url: 'to-do-list', icon: 'list' },
    { title: 'Add Task', url: 'add-task', icon: 'add' },
    { title: 'Goals', url: 'goals', icon: 'heart' },
    { title: 'Add Goal', url: 'add-goal', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Achievements', url: 'achievements', icon: 'warning' },
  ];
  constructor() {}
}
