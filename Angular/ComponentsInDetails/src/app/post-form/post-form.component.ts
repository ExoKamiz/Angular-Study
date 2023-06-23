import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Post } from '../app.component';
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  //3
  //decorator for passing to out(from child component to parent)
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  //4
  //decorator that configures a view query; parameter is link to html input
  //Parameters which we get using ViewChild has ElementRef type
  // @ts-ignore
  @ViewChild('titleInput') inputRef: ElementRef
  title = ''
  text = ''

  constructor() {}
  ngOnInit(){}
//3
  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      //we use emit when want pass data out; in this case from post-form to app
      this.onAdd.emit(post)

      this.title = this.text = ''
    }
  }
  //4
  //nativeElement is normal DOM element, which we use for getting methods
  focusTitle(){
    this.inputRef.nativeElement.focus()
  }
}

