import { Component, OnInit } from '@angular/core';
import { MockServiceService } from 'src/mock-service.service';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  //posts: Post[] = postsMock
  posts: Post[] = []
  isLoaded: boolean = false

  constructor(private mockservice: MockServiceService) { }

  ngOnInit(): void {
    this.mockservice.getAll().subscribe((res) =>{
        this.posts = res
        this.isLoaded = true
        console.log(this.posts)
    });
  }

}
