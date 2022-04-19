import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';
import { Itask } from '../interfaces/itask';
import { GoalService } from '../services/goals.service';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage {
  tasks!:Itask[];
  goals!:Igoal[];


  constructor(private taskService:TaskService, private goalService:GoalService) {

  }
ionViewWillEnter(){
  this.taskService.getTasks().subscribe((results)=> {
    this.tasks = results;
  }
  );

  this.goalService.getGoals().subscribe((results)=> {
    this.goals = results;
  }
  )
}

}


