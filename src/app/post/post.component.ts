import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockServiceService } from 'src/mock-service.service';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  constructor(private route: ActivatedRoute, private mockService: MockServiceService) { }

  ngOnInit(): void {
    this.mockService.getAll().subscribe((res) => {
      this.posts = res
      console.log(this.posts)
    });
    this.post = this.posts.find((post) => post.id === +this.route.snapshot.params['id']);
  }
}
