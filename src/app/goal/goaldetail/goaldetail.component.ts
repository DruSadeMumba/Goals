import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from 'src/app/goal-service/goal.service';
import { Goal1 } from 'src/app/goal1';

@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.css']
})
export class GoaldetailComponent implements OnInit { 

  @Input()
  goal!: Goal1 ;
  

  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor(private route:ActivatedRoute, private service:GoalService) { 
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(parseInt(id!));
  }

}
