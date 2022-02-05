import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    {quote:'"Do or do not. There is no try."', author: 'Yoda', movie: 'Star Wars', submitter: ''},
    {quote:'"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."', author: 'Dumbledore', movie: 'Harry Porter and the Prisoner of Azkaban', submitter: ''},
    {quote:'“The flower that blooms in adversity is the most rare and beautiful of all.”', author: 'Fa Zhou', movie: 'Mulan', submitter: ''},
    {quote:'"When life gets you down do you wanna know what you\'ve gotta do? Just keep swimming!"', author: 'Dory', movie: 'Finding Nemo', submitter: ''},
    {quote:'"Our lives are defined by opportunities, even the ones we miss."', author: 'Benjamin Button', movie: 'The Curious Case of Benjamin Button', submitter: ''},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
