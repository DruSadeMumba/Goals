import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal1 } from 'src/app/goal1';

@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.css']
})
export class GoaldetailComponent implements OnInit {

  @Input()
  goal!: Goal1;

  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
