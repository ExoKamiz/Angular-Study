 import { Component } from '@angular/core';
 import {Observable} from "rxjs";
 export interface Post{
   [field: string] : string
   title: string;
   text: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pipes';
  //1
  e: number = Math.E
  str = 'hello world'
  date: Date = new Date()
  float = 0.42

  obj = {
    a: 1,
    b:{
      c: 2,
      d: {
        e: 3,
        f:4
      }
    }}

  posts: Post[] = [
    {title: 'Shrek', text: 'Shrek is the best movie'},
    {title: 'Joker', text: 'Not the best movie, but very popular'},
    {title: 'Baby Shark', text:'No comments pls...'}
  ]

  search=''
  searchField='title'

  //9
  addPost(){
    this.posts.unshift({
      title: 'Hello',
      text: 'Mir'
    })
  }

  //10
  //add Pipe async to call an object asynchronously
  //A Promise is a JavaScript object that represents the result of an asynchronous operation that can be resolved (succeeded) or rejected (failed) in the future
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(()=>{
      resolve('Promise Resolved')
    }, 4000)
  })

  dates: Observable<Date> = new Observable(obs=>{
    setInterval(()=>{
      obs.next(new Date())
    }, 1000)
  })
}
