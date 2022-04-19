import { Component, Input, OnInit } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/tasks.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {
@Input()task!: Itask
private tasksURL = "http://localhost:3000/";
  constructor(private router:ActivatedRoute, private taskService:TaskService, private httpClient:HttpClient, public toastController:ToastController) { }

getTask(){
alert(this.taskService.getTask(this.task.id))
}
updateTask(){
  console.log(this.task)
  this.task.status = "Done"
  console.log(this.task)
  this.taskService.updateTask(this.task.id,this.task).subscribe(()=>{
    alert('Task was Updated')
  })

}

// changeStatus(){
//   console.log(this.task)
//   this.task.status = "Done"
//   console.log(this.task)
//   this.taskService.updateTask(this.task.id, this.task.status).subscribe(()=>{
//     alert('Task was Updated')
//   })
// }

// putTask(id,updatedTask){
//   return this.httpClient.put<Itask[]>(`${this.tasksURL}/updatetask/${id}`,updatedTask);
//   }
}

// add_task(){
//   console.log(this.addTaskForm.value)
//   this.taskService.createTask(this.addTaskForm.value).subscribe(()=> { 
//   alert('Task was created')
//     this.addTaskForm.reset()
//   })
//   }