//1
//Services are the only entity in Angular that does not require the use of decorators, but better use
//We should register it in app.module in providers
//2
import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({providedIn: 'root'})
export class AppCounterService{
  counter = 0
  constructor(private logService: LogService) {
  }

  increase(){
    this.logService.log('increase counter...')
    this.counter++
  }

  decrease(){
    this.logService.log('decrease counter...')
    this.counter--
  }
}
