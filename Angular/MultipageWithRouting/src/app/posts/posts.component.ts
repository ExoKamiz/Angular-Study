import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  // 8
  showIds = false;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
    
    //first way to change query parameter using queryParams
    ngOnInit(): void {
      this.route.queryParams.subscribe((params: Params) => {
        console.log('Params', params)
        //change the flag showIds; !! converts string to boolean value
        this.showIds = !!params.showIds
      })
    }

    //second way to change query parameter using navigate
    showIdsProgram(){
      this.router.navigate(['/posts'], {
        queryParams:{
          showIds: true
        }
      })
    }
}
