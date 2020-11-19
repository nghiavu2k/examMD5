import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: any;
  currentBook: any = {
    title: '',
    author: '',
    description: '',
  };
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
    this.getBook(this.id);
  }

  ngOnInit(): void {}

  updateBook() {
    if (confirm('Are you sure')) {
      this.bookService.update(this.id, this.currentBook).subscribe(
        (data) => {
          this.currentBook = data;
          this.router.navigateByUrl('');
        },
        (error) => console.log(error)
      );
    }
  }
  getBook(id: any) {
    this.bookService.get(id).subscribe(
      (data) => {
        this.currentBook = data;
      },
      (error) => console.log(error)
    );
  }
}
