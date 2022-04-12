import { Injectable } from '@angular/core';
import { Goal1 } from '../goal1';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  constructor() { }
}
