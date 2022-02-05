import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('"Do or do not. There is no try."', 'Yoda', 'Star Wars', 'Nick'),
    new Quote('"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."', 'Dumbledore', 'Harry Porter and the Prisoner of Azkaban', 'Sky'),
    new Quote('“The flower that blooms in adversity is the most rare and beautiful of all.”', 'Fa Zhou', 'Mulan', 'Patricia'),
    new Quote('"When life gets you down do you wanna know what you\'ve gotta do? Just keep swimming!"', 'Dory', 'Finding Nemo', 'Jessie'),
    new Quote('"Our lives are defined by opportunities, even the ones we miss."', 'Benjamin Button', 'The Curious Case of Benjamin Button', 'Diana'),
    
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
