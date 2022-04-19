import { Component, OnInit } from '@angular/core';
import {Igoal} from'../interfaces/igoal'
import { GoalService } from '../services/goals.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
goals!:Igoal[];
  constructor(private goalService: GoalService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    console.warn(this.activatedRoute.snapshot.params.id)
    this.goalService.getGoal(this.activatedRoute.snapshot.params.id).subscribe((result)=>{
      console.warn("result", result)
    })
  }
  ionViewWillEnter(){
    this.goalService.getGoals().subscribe((results)=> {
      this.goals = results;
    });
  }

  goToAddGoal() {
    this.route.navigate(['/add-goal/']);
  }

}
