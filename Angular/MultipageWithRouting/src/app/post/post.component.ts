import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

// 7
export class PostComponent implements OnInit {

  post: Post;
  constructor(
      // Provides access to information about the route associated with the component loaded in the output
      private route: ActivatedRoute,
      private router: Router, 
      private postsService: PostsService) {}

  // subscribe to the route and get an ID from it, pass the ID to the service method to get the object
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      // added a plus sign to turn the passed string into an int
      this.post = this.postsService.getById(+params.id);
    });
  }

  loadPosts() {
    this.router.navigate(['/posts', 44]);
  }
}
