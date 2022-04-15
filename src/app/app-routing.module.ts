import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalComponent } from './goal/goal.component';
import { GoaldetailComponent } from './goal/goaldetail/goaldetail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path: 'goals/:id', component: GoaldetailComponent },
  {path:'quotes', component: QuotesComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
