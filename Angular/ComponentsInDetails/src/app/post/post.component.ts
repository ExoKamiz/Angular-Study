import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  //8
  //OnPush responds only to input properties, for example if changes object link
  changeDetection: ChangeDetectionStrategy.OnPush,
  //9
  //Makes the styles of this component global for the whole project
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit{
  //Importing from app.component.ts; for showing that we get post from out, we should use decorator @Input()
  // @ts-ignore
  @Input() myPost: Post

  //6
  // @ts-ignore
  @ContentChild('info') infoRef: ElementRef
  constructor() {
  }
  ngOnInit() {}
}
