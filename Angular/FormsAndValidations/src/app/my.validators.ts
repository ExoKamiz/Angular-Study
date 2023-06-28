import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class MyValidators{
  //10
  //method checking incoming control for forbidden e-mails
  static restrictedEmails(control: FormControl): {[key:string]: boolean}|null{
    if(['m@gmail.com'].includes(control.value)){
      return {restrictedEmail: true}
    }
    return null
  }
  //11
  //async method checking incoming control for forbidden e-mails
  static uniqEmail(control: AbstractControl): Promise<any> | Observable<any>{
    return new Promise(resolve => {
      setTimeout(()=>{
        if (control.value === 'z@mail.com'){
          resolve({uniqEmail: true})
        } else{
          resolve(null)
        }
      }, 1000)
    })
  }
}
