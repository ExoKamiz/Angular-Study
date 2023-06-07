import {Component} from "@angular/core";  //using of decorator
//decorator creating
@Component({
  selector: 'app-post', //for future using in template
  templateUrl: './post.component.html', //pass to template
  // End of minimal elements for Component
  styleUrls: ['./post.component.scss']
})
export class PostComponent{} //not forget to import to app.module.ts
