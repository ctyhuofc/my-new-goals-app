import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../services/tasks.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  addTaskForm;

  constructor(private formBuilder:FormBuilder, private taskService:TaskService){
    this.addTaskForm = formBuilder.group({
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
    return this.addTaskForm.get('name')!;
  }
  get description(){
    return this.addTaskForm.get('description')!;
  }
  get task_date(){
    return this.addTaskForm.get('start_of_date')!;
  }
  get category(){
    return this.addTaskForm.get('end_of_date')!;
  }
  get priority_level(){
    return this.addTaskForm.get('status')!;
  }

  
  add_task(){
    console.log(this.addTaskForm.value)
    this.taskService.createTask(this.addTaskForm.value).subscribe(()=> { 
    alert('Task was created')
      this.addTaskForm.reset()
    })
    }
  }
  // update_task(){
  //   console.log(this.addTaskForm.value)
  //   this.taskService.updateTask(this.addTaskForm.value.id).subscribe(()=>{
  //     alert('Task was Updated')
  //   })
  
  


