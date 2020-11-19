import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  currentBook: any = {
    name: "",
    address: ""
  }
  constructor(private bookService: BookService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params.id;
    this.get(this.id);
  }

  ngOnInit(): void {
  }

  get(id: any) {
    this.bookService.get(id)
        .subscribe(data => {
          this.currentBook = data;
        }, error => console.log(error));
  }
}
