import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { TaskService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'to-do-list',
  templateUrl: 'to-do-list.page.html',
  styleUrls: ['to-do-list.page.scss']
})
export class ToDoListPage implements OnInit {
  tasks!:Itask[];

  constructor(private taskService:TaskService, private activatedRoute:ActivatedRoute, public toastController:ToastController) {

  }


  ngOnInit(): void {
    console.warn(this.activatedRoute.snapshot.params.id)
    this.taskService.getTask(this.activatedRoute.snapshot.params.id).subscribe((result)=>{
      console.warn("result", result)
    })
  }
ionViewWillEnter(){
  this.taskService.getTasks().subscribe((results)=> {
    this.tasks = results;
  });
}
}
