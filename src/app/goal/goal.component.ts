import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal1 } from '../goal1';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})

export class GoalComponent implements OnInit {
 
  goals:Goal1[];
  
  addNewGoal1(goal: Goal1){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  toggleDetails(index: number): void{
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1);
      }
    }
  }
  
  constructor(goalService:GoalService) {
    this.goals = goalService.getGoals()
  }

  ngOnInit(): void {
  }

}
