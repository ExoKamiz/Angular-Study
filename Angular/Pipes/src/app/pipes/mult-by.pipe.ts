//6
//pipe for multiply
//Add decorator, name is mandatory
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mult'
})
//Good practise is implement after interface
export class MultByPipe implements PipeTransform{
  //takes the initial value of the data and transforms it
  transform(num: number, pow: number = 2): number {
    return num*pow
  }
}
