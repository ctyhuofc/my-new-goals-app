import { Component, Input, OnInit } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { TaskService } from '../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achievement-child',
  templateUrl: './achievement-child.page.html',
  styleUrls: ['./achievement-child.page.scss'],
})
export class AchievementChildPage implements OnInit {
  @Input()task!: Itask
  constructor(private taskService:TaskService, private activatedRoute:ActivatedRoute, private route:Router ) { }

  ngOnInit() {
  }
  updateTask(){
    console.log(this.task)
    this.task.status = "Done"
    console.log(this.task)
    this.taskService.updateTask(this.task.id, this.task).subscribe(()=>{
      alert('Task was Updated')
    })
  }

  goToDo() {
    this.route.navigate(['/to-do-list']);
  }
}
