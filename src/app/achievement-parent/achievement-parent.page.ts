import { Component, Input, OnInit } from '@angular/core';
import { Igoal } from '../interfaces/igoal';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../services/goals.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-achievement-parent',
  templateUrl: './achievement-parent.page.html',
  styleUrls: ['./achievement-parent.page.scss'],
})
export class AchievementParentPage {
@Input()goal!:Igoal
private goalsURL = "http://localhost:3000"
  constructor(private router:ActivatedRoute, private goalService:GoalService, private httpClient:HttpClient) { }


  getGoal(){
    alert(this.goalService.getGoal(this.goal.id))
    }
    updateGoal(){
      console.log(this.goal)
      this.goal.status = "Done"
      console.log(this.goal)
      this.goalService.updateGoal(this.goal.id,this.goal).subscribe(()=>{
        alert('Goal was Updated')
      })
    }
}
