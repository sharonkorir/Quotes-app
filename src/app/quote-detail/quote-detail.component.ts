import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(delete:boolean){
    this.deleteQuote.emit(delete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
