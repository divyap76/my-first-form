import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  heading: string="MY FIRST FORM ";


constructor(private jd: FormBuilder){}

createNewProfile:FormGroup;

ngOnInit(){
  this.createNewProfile=this.jd.group({
    userName:[""],
    emailId:[""],
    password:[""],
    conformPassword:[""],
  })
}

LOGIN(){
  console.log("login clicked");
  console.log("form controls", this.createNewProfile);

}
 
}