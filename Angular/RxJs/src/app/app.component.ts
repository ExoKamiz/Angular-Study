import { Component } from '@angular/core';
//to create new streams we can import for example the interval function
import {interval, Subscription, Observable, Subject} from "rxjs";
import {map, filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //2
  //we can put the result of subscribe method into this variable
  // @ts-ignore
  //4
  sub: Subscription
  //5
  stream1$: Subject<number> = new Subject<number>()
  counter = 0

  constructor() {
    //1
    //this function returns stream in RxJs
    //$ at the end to indicate that the reactivity is stored in this variable
    //intervalStream$ is a simple object
    const intervalStream$ = interval(1000)
    this.sub = intervalStream$
      //3
      //allows you to apply a number of operators for a given stream
      .pipe(
        //call as a function
        filter(value => value % 2 === 0),
        map((value)=> `Mapped value ${value}` )
      )
      .subscribe((value)=>{
      console.log(value)
    })
    //4
    //we can also use the Observable to create our own stream
    const stream$ = new Observable(observer=>{
      setTimeout(()=>{
        observer.next(1)
      }, 1500)
      //called only if there are no errors
      setTimeout(()=>{
        observer.complete()
      }, 1900)


      setTimeout(()=>{
        observer.error('Something went wrong')
      }, 2000)

      setTimeout(()=>{
        observer.next(2)
      }, 2500)
    })

    this.sub = stream$
      .subscribe(
        value => console.log('Next: ', value),
        //process the error so that it is not laid out in the console
        error => console.log('Errors: ', error),
        ()=> console.log('Complete')
      )
    //5
    this.sub = this.stream1$.subscribe(value => {
      console.log('Subscribe', value)
    })
  }
  //2
  stop(){
    //unsubscribing from the stream to stop it
    this.sub.unsubscribe()
  }
  //5
  next(){
    this.counter++
    this.stream1$.next(this.counter)
  }
}
