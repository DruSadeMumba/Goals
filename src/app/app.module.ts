import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoaldetailComponent } from './goal/goaldetail/goaldetail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { GoalService } from './goal-service/goal.service';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoaldetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
