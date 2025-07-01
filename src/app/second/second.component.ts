import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  posts$ = this.postsService.getPosts().pipe(
    map((data: any) => data.results)
  );

  constructor(private postsService: PostsService) { }
}
