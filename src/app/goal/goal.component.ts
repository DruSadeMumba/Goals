import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { GoalService } from '../goal-service/goal.service';
import { Goal1 } from '../goal1';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})

export class GoalComponent implements OnInit {
 
  goals: Goal1[];
  alertServices: AlertService;
 
  
  addNewGoal1(goal: Goal1){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  goToUrl(id: number){
    this.router.navigate(['/goals',id])
  }

  /* toggleDetails(index: number): void{
    this.goals[index].showDescription = !this.goals[index].showDescription;
  } */

  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1);
        this.alertServices.alertMe("DELETED!!")
      }
    }
  }
  
  constructor(goalService:GoalService, alertServices:AlertService,  private router:Router) {
    this.goals = goalService.getGoals();
    this.alertServices = alertServices;
    
  }

  ngOnInit(): void {
    
  }

}
