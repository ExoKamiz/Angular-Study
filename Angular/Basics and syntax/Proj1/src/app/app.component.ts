import { Component } from '@angular/core';
import {timeout} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'I try to understand this'
//   number  =  33
//   arr = [1, 2, 3]
//   obj = {a: 1, b: {c: 2}}
//
//   inputValue = ''
//
//   //img = 'https://www.nicepng.com/png/detail/399-3997176_mini-shrek-by-moderenart-winning-moves-top-trumps.png'
//   //Using constructor for changing image in 5 sec
//   constructor() {
//     // setTimeout(()=>{
//     //   this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcktMLfy9_M1Jk3ZQHizWG0ugzsEzd35rXAQ&usqp=CAU'
//     // }, 5000)
//   }
//   //
//   // onInput(event: any){
//   //   console.log('Event', event)
//   //   this.inputValue = event.target.value  //passing to inputValue text from input via event
//   // }
//   onInput(event: Event){   //we can change any on Event type, but in this case we need to set
//     this.inputValue = (<HTMLInputElement>event.target).value   //HTMLInputElement for our event
//   }
//   onClick(){
//     console.log('Click')
//   }
//
//   onBlur(str: string){
//     this.inputValue = str
//   }
// }

export class AppComponent{
  //=====14=====
  // title = ''
  //
  // onInput(event:any){
  //   this.title = event.target.value
  // }

  //=====15=====
  backgroundToggle = false

  //=====17=====
  toggle: any = false

  //=====19=====
  arr = [1, 2, 3, 4, 5, 6, 7]

  objs = [
    {title: 'Post 1', author: 'Max', comments:[
        {name: 'Wowo', text: 'Im Wowo'},
        {name: 'Wowo', text: 'Im not Wowo'},
        {name: 'Wowo', text: 'Im sure that Im Wowo'}
      ]},
    {title: 'Post 2', author: 'Maxon', comments:[
        {name: 'Vlad', text: 'Im Vlad'},
        {name: 'Vlad', text: 'Im not Vlad'},
        {name: 'Vlad', text: 'Im sure that Im Vlad'}
      ]}
  ]

  //=====20=====
  now: Date = new Date()
}
