//8
import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";
//10
//added Pure so that when we enter something in the search bar, we can add a new element to the list
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchField: string = 'title'): Post[] {
    //if string is empty returns all posts
    if (!search.trim()){
      return posts
    }
    //If not, then filter by title
    //added cast to lower case to not react to capital letters
    //depending on the value of the button, the desired value changes
    return posts.filter(post=>{
      return post[searchField].toLowerCase().includes(search.toLowerCase())
    })
  }

}
