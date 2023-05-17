import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quote?: string;
  author?: string;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.loadNewQuote();
  }

  loadNewQuote(): void {
    this.quoteService.getRandomQuote().subscribe(data => {
      console.log(data);
      this.quote = data[0].quote;
      this.author = data[0].author;
    }, error => console.error(error));
  }
}