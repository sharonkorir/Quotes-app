import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('"For me, becoming isn\'t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn\'t end."', 'Michelle Obama' , 'Nick', 0, new Date(2021,12,12)),
    new Quote('"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."', 'J. K. Rowling', 'Sky', 0, new Date(2021,12,12)),
    new Quote('“Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.”', 'Morgan Freeman', 'Patricia', 0, new Date(2021,12,12)),
    new Quote('"Try to be a rainbow in someone’s cloud."', 'Maya Angelou', 'Jessie', 0, new Date(2021,12,12)),
    new Quote('"I\'ve noticed when I fear something, if I just end up doing it, I\'m grateful in the end."', 'Colleen Hoover', 'Diana', 0, new Date(2021,12,12)),
    
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isDeleted:boolean, index:number){
    if (isDeleted) {
      this.quotes.splice(index,1);
    }
  }

  /*quoteVote(isUpVoted:boolean, isDownVoted: boolean, index:number, votes: 0){
    if (isUpVoted) {
      this.quotes.upVote(index, votes){
        upVotes += 1
      }
    } else(isDownVoted){
      this.quotes.downVote(index, votes){
        downVotes -= 1
    }
  }
*/
  constructor() { }

  ngOnInit(): void {
  }

}
