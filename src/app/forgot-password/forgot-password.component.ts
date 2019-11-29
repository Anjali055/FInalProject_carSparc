import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordModel:FormGroup

  constructor( private fb:FormBuilder) {
    this.forgotPasswordModel=this.fb.group({
      mobileno:[''],



    })


   }

   SaveForgotAction(a:any){
    
    console.log(JSON.stringify(a))

    

   }

  ngOnInit() {
  }

}
