import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book = {
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService,private router : Router) {}

  ngOnInit(): void {}

  saveBook(): void {
    const data = {
      title: this.book.title,
      author: this.book.author,
      description: this.book.description,
    };

    this.bookService.create(data).subscribe(
      (response) => {
        this.router.navigateByUrl('');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
