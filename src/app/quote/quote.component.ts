import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote, } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('"For me, becoming isn\'t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn\'t end."', 'Michelle Obama' , 'Nick', 0, 0, new Date(2022,11,11)),
    new Quote('"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."', 'J. K. Rowling', 'Sky', 0, 0, new Date(2022,1,3)),
    new Quote('“Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.”', 'Morgan Freeman', 'Patricia', 0, 0, new Date(2021,11,12)),
    new Quote('"Try to be a rainbow in someone\'s cloud."', 'Maya Angelou', 'Jessie', 0, 0, new Date(2021,10,12)),
    new Quote('"I\'ve noticed when I fear something, if I just end up doing it, I\'m grateful in the end."', 'Colleen Hoover', 'Diana', 0, 0, new Date(2021,8,12)),
    
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isDeleted:boolean, index:number){
    if (isDeleted) {
      let confirmDelete = confirm('Are you sure you want to delete this quote?')

      if (confirmDelete){
        this.quotes.splice(index,1);
      }  
    }
  }

  upVote(isUpVoted:boolean, index:number){
    if (isUpVoted) {
      this.quotes[index].likes += 1
    }
  }

  downVote(isUpVoted:boolean, index:number){
    if (isUpVoted) {
      this.quotes[index].dislikes += 1
    }
  }

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
