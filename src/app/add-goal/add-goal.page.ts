import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GoalService } from '../services/goals.service';
@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  addGoalForm;

  constructor(private formBuilder:FormBuilder, private goalService:GoalService){
    this.addGoalForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_start: ['', [Validators.required]],
      date_of_end: ['', [Validators.required]],
      status: ['', [Validators.required]],
    
    })
  }
  ngOnInit() {
  }
  get title(){
    return this.addGoalForm.get('name')!;
  }
  get description(){
    return this.addGoalForm.get('description')!;
  }
  get goal_date(){
    return this.addGoalForm.get('start_of_date')!;
  }
  get category(){
    return this.addGoalForm.get('end_of_date')!;
  }
  get priority_level(){
    return this.addGoalForm.get('status')!;
  }

  
  add_goal(){
    console.log(this.addGoalForm.value)
    this.goalService.createGoal(this.addGoalForm.value).subscribe(()=> { 
    alert('Goal was created')
      this.addGoalForm.reset()
    })
    }
  }

