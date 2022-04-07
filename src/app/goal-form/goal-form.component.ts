import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal1 } from '../goal1';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal1 = new Goal1(0,"","",new Date());

  @Output() addGoal1 = new EventEmitter<Goal1>();

  submitGoal(){
  this.addGoal1.emit(this.newGoal1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
