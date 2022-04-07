import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {    
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference1 = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    var dateDifference2 = Math.abs(todayWithNoTime - value) 
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifference1Seconds = dateDifference1*0.001; //converts miliseconds to seconds
    var dateDifference2Seconds = dateDifference2*0.001;
    var dateCounter1 = dateDifference1Seconds/secondsInDay;
    var dateCounter2 = dateDifference2Seconds/secondsInDay;

    if (dateCounter1 >= 1 && value > todayWithNoTime){
      return ('This goal will be complete in ' + dateCounter1 + ' days');
    }
    else
    {
      return ('This goal is overdue by ' +  dateCounter2 + ' days');
    }
  } 
  
}