import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MockServiceService } from 'src/mock-service.service';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  post?: Post;
  id: number = -1;
  slug: string ="";
  constructor(private route: ActivatedRoute, private mockService: MockServiceService) { }

  ngOnInit(): void {
    this.mockService.getAll().subscribe((res) => {
      this.posts = res
      console.log(this.posts)
    });

    this.route.params.subscribe(params => {
      //this.id = params['id'];
      this.slug = params['slug'];
      this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);
      //this.post = this.posts.find((post) => post.id === this.route.snapshot.params['id']);
    });
  }
}
