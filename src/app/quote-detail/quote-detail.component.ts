import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;

  constructor() { 
  }

  @Output() isDeleted = new EventEmitter<boolean>();

  deleteQuote(deleted:boolean){
    this.isDeleted.emit(deleted);
  }

  @Output() isUpVoted = new EventEmitter<boolean>();

  voteUp(upVoted: boolean,) {
    this.isUpVoted.emit(upVoted);
  }

  @Output() isDownVoted = new EventEmitter<boolean>();

  voteDown(downVoted: boolean,) {
    this.isDownVoted.emit(downVoted);
  }

  

  ngOnInit(): void {
  }

}
