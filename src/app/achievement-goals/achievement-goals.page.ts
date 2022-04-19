import { Component, Input, OnInit } from '@angular/core';
import { Igoal } from '../interfaces/igoal';
import { GoalService } from '../services/goals.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-achievement-goals',
  templateUrl: './achievement-goals.page.html',
  styleUrls: ['./achievement-goals.page.scss'],
})
export class AchievementGoalsPage implements OnInit {
  @Input()goal!: Igoal
  constructor(private goalService:GoalService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit() {
  }
  updateGoal(){
    console.log(this.goal)
    this.goal.status = "Done"
    console.log(this.goal)
    this.goalService.updateGoal(this.goal.id, this.goal).subscribe(()=>{
      alert('Task was Updated')
    })
  }

  goToGoals() {
    this.route.navigate(['/goals/']);
  }
}
