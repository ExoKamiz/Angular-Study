//6
//it is better to register interfaces in the service
import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, delay, map, Observable, tap, throwError} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

export interface Todo{
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodoService{
  constructor(private http: HttpClient) {}

  //it doesn’t matter to us where the stream will be executed, we just create it here and return it
  //http streams return a Todo type overview
  addTodo(todo: Todo): Observable<Todo>{
    //9
    //add our custom header to the request as third parameter
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo,{
      headers: new HttpHeaders({
        'MyCustomerHeader': Math.random().toString()
      })
    })
  }

  fetchTodos(dwnldPosts: number): Observable<Todo[]> {
    //10
    //if we have several parameters, it is better to write down their object and pass
    // let params = new HttpParams()
    // params = params.append('_limit', '5')
    // params = params.append('custom', 'anything')

    //to use http we have to wrap the request in RxJs and subscribe on it
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',{
      //10
      //we can customize the parameters and values passed to them using HttpParams
      params: new HttpParams().set('_limit', dwnldPosts),
      //params

      //11
      //change observe from default body to response
      observe: "response"
    })
      //add artificial delay
      //8
      //adding an error handling operator to Pipe
      .pipe(
        map(response => {
          return<Todo[]> response.body
        }),
        delay(500),
        catchError(error =>{
          console.log('Error: ', error.message)
          //we wrap the error in an operator throwError to return Observable
          return throwError(error)
        }))
  }

  removeTodo(id: number): Observable<any>{
    //11
    //The observe parameter of the options object in Angular HTTP allows you to specify how
    // to handle the response from the server when making an HTTP request.
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      observe: "events"
    }).pipe(
      //intercepts intermediate data does nothing with them, but we can interact with this data
      //we get access to all asynchronous events
      tap(event => {
        //check the Event Type and output to the console
        if (event.type === HttpEventType.Sent){
          console.log('Sent', event)
        }

        if (event.type === HttpEventType.Response){
          console.log('Response', event)
        }
      })
    )
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
