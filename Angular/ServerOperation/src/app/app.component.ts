import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, subscribeOn} from "rxjs";
import {Todo, TodoService} from "./todos.service";
//2
//added an interface to parse objects received via http
// export interface Todo{
//   completed: boolean
//   title: string
//   id?: number
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //2
  todos: Todo[] = []

  //loading indicator
  loading = false

  //8
  error = ''

  //3
  todoTitle = ''
  dwnldPosts = 0
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos(this.dwnldPosts)
  }

  title = 'ServerOperation';
//3
  //6
  addTodo() {
    //if empty string then returns nothing
    if (!this.todoTitle.trim()){
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }
    //we call the method addTodo and passing parameters to it
    //subscribe to the Stream created in the addTodo method
    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo=>{
      console.log('todo', todo)
      //add a new element to the array using the push method
      this.todos.push(todo)
      this.todoTitle = ''

    // this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    //   .subscribe(todo=>{
    //     console.log('todo', todo)
    //     //add a new element to the array using the push method
    //     this.todos.push(todo)
    //     this.todoTitle = ''
    })
  }
  //4
  //6
  //8
  fetchTodos(postsAmount: number) {
    this.loading = true
    this.todoService.fetchTodos(postsAmount)
      .subscribe(todos=>{
        console.log('Response', todos)
        this.todos = todos
        this.loading = false
      }, error =>{
        this.error = error.message
      })
  }
  //5
  //6
  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(()=>{
        //overwrite the array filtering it for non-existent IDs
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
  //7
  //the subscribe method in total can take three parameters, the first callback when everything is fine,
  // the second when there is an error, and the third one with empty parameters when completed
  completeTodo(id: number) {
    this.todoService.completeTodo(id)
     .subscribe(todo=> {
       this.todoService.completeTodo(id)
         .subscribe(todo=>{
           this.todos.find(t => t.id === todo.id)!.completed = true
         })
     })
  }

}

