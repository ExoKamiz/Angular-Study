import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //2
  // @ts-ignore
  form: FormGroup
  ngOnInit() {
    //2
    this.form = new FormGroup({
      //3
      //control creating
      //4
      //passing validators as an array
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        //10
        MyValidators.restrictedEmails
      ],
        //11
        //asynchronous validators we must pass to the third parameters in the constructor
        MyValidators.uniqEmail),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      //7
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      //9
      skills: new FormArray([])
    })
  }
  //2
  submit(){
    //3
    if (this.form.valid){
      console.log('Form: ', this.form)
      const formData = {...this.form.value}
      console.log('Form Data: ', formData)
      this.form.reset()
    }
  }

  title = 'FormsAndValidations';

  setCapital() {
     const cityMap: any = {
      ua: 'Kyiv',
      pl: 'Warsaw',
      ca: 'Ottawa'
    }
    //get country value from control
    const cityKey = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]
    //The patchValue method is used to update form values
    this.form.patchValue({
      address: {city:city}
    })
  }
  //9
  addSkill() {
    const control = new FormControl('', Validators.required);
    //adding elements to form
    //(<FormArray>this.form.get('skills')).push(control)
    (this.form.get('skills') as FormArray).push(control)
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls
  }
}
