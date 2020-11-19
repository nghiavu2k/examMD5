import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  currentBook: any = {
    name: "",
    address: ""
  }
  constructor(private bookService: BookService, private route: ActivatedRoute, private router : Router) { 
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

  deleteBook(id: any) {
    if(window.confirm('Are you sure?')){
      this.bookService.delete(id).subscribe(res => {
        this.router.navigateByUrl("")
      }, error => console.log(error));
    }
    
  }
}
