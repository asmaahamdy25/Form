import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  myFormGroup:FormGroup;
   formData : string;
  constructor() { }

  ngOnInit(){

  }

  getData(){
    let group ={};
    if(this.formData){
      JSON.parse(this.formData).forEach(item=> !['submit' ,'cancel'].includes(item.type) ? group[item.id] = new FormControl('') : null)
      this.myFormGroup = new FormGroup(group)  
      return JSON.parse(this.formData)
    } else{
      return []
    }
  }
  


  cancel(){
    this.myFormGroup.reset();

  }

  submit(){
   console.log(this.myFormGroup.value) 
  }
}
