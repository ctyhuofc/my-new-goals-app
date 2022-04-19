import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTasks() {
    return this.httpClient.get<Itask[]>('http://localhost:3000/tasks/');
}

createTask(formData:any){
return this.httpClient.post('http://localhost:3000/addtask/', formData);
 }

 deleteTask(id:number){
   return this.httpClient.delete('http://localhost:3000/deletetask/')
 }

 getTask(id){
   return this.httpClient.get<Itask[]>('http://localhost:3000/`${id}`')
 }

 updateTask(id:number, updatedStatus:any){
  return this.httpClient.patch<Itask[]>(`http://localhost:3000/updatetask/${id}/`, updatedStatus)
  }
}

