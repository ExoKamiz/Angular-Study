import {Component} from "@angular/core";
@Component({
  selector: 'app-post4',
  //if u don't want to create .html, you can add template here, if template is small
  template: `<div class="post4">
    <h2>Greetings 4</h2>
    <p>Que tal guapas</p>
  </div>`,
  //also we can add css here in this way
  styles: [`
    .post4{
      padding: .5rem;
      border: 2px solid black;
    }

    h2{
      font-size: 1rem;
    }
  `]

})
export class Post4Component{}
