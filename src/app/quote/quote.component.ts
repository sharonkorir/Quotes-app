import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('"Do or do not. There is no try."', 'Yoda', 'Star Wars', 'Nick', 0, new Date(2021,12,12)),
    new Quote('"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."', 'Dumbledore', 'Harry Porter and the Prisoner of Azkaban', 'Sky', 0, new Date(2021,12,12)),
    new Quote('“The flower that blooms in adversity is the most rare and beautiful of all.”', 'Fa Zhou', 'Mulan', 'Patricia', 0, new Date(2021,12,12)),
    new Quote('"When life gets you down do you wanna know what you\'ve gotta do? Just keep swimming!"', 'Dory', 'Finding Nemo', 'Jessie', 0, new Date(2021,12,12)),
    new Quote('"Our lives are defined by opportunities, even the ones we miss."', 'Benjamin Button', 'The Curious Case of Benjamin Button', 'Diana', 0, new Date(2021,12,12)),
    
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
        downVotes += 1
    }
  }
*/
  constructor() { }

  ngOnInit(): void {
  }

}
