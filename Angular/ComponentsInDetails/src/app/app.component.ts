import {Component, OnInit} from '@angular/core';

//2
//Created model of Post
export interface Post{
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  //2
  //Created array of Post objects
  posts: Post[] = [
    {title: 'I wanna be your', text: 'Are you sure?', id:1},
    {title: 'Already not sure, my husband...', text: 'What about you?', id:2},
    {title: 'What are talking about?', text: 'Wtf, who are you, why are you talking with my wife', id: 3}
  ]


  ngOnInit(): void {
    ////8
    // setTimeout(()=> {
    //   console.log('Tiemout')
    //   this.posts[0] = {
    //     title: 'changed',
    //     text: 'changed 2',
    //     id: 33
    //   }
    // }, 5000)
  }

  //3
  //Using unshift() for passing post object into posts array on first place
  updatePosts(post: Post){
    this.posts.unshift(post)
    //console.log('Post', post)
  }
}
