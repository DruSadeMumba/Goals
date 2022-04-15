import { Injectable } from '@angular/core';
import { Goal1 } from '../goal1';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goal!: Goal1;


  getGoals(){
    return Goals
  }

  getGoal(id: number){
    for (let goal of Goals){
      if (goal.id == id){
        this.goal = goal
      }
    }
    return this.goal;
  }

  constructor() { }
}
