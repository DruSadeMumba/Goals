import { Component, OnInit } from '@angular/core';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote!:Quote;

  constructor(private quoteService:QuoteRequestService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")
      console.log("An error occurred")
  }) 
 
  }

}
