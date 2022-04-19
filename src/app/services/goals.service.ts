import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root'
})

export class GoalService {

  constructor(private httpClient:HttpClient) { }

  getGoals() {
    return this.httpClient.get<Igoal[]>('http://localhost:3000/goals/');
}

createGoal(formData:any){
return this.httpClient.post('http://localhost:3000/addgoal/', formData);
 }

 deleteGoal(id:number){
   return this.httpClient.delete('http://localhost:3000/deletegoal/')
 }

 getGoal(id){
   return this.httpClient.get<Igoal[]>('http://localhost:3000/goals/`${id}`')
 }

 updateGoal(id:number, updatedStatus:any){
  return this.httpClient.patch<Igoal[]>(`http://localhost:3000/updategoal/${id}/`, updatedStatus)
  }
}


