import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;


  @Output() isDeleted = new EventEmitter<boolean>();

  deleteQuote(deleted:boolean){
    this.isDeleted.emit(deleted);
  }

  @Output() isVoted = new EventEmitter<boolean>();

  

  voteUp(upVoted: boolean,) {
    this.isVoted.emit(upVoted);
  }

  voteDown(downVoted: boolean,) {
    this.isVoted.emit(downVoted);
  }

  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
