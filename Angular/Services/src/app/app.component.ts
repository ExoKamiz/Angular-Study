import { Component } from '@angular/core';
import {AppCounterService} from "./services/app-counter.service";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //to register the service locally add providers in the component and not in the module
  providers: [LocalCounterService]
})
export class AppComponent {
  //we just injected the service, in the component nothing happens and all the logic is in the service
  constructor(public appCounterService: AppCounterService,
             public localCounterService: LocalCounterService
              ) {
  }
  title = 'Services';

}
