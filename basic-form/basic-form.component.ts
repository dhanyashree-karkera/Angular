import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConnectionService } from '../service/connection.service';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  value: string | undefined;
name:FormGroup;
constructor(private service:ConnectionService){
  this.name=new FormGroup({
fname:new FormControl(''),
lname:new FormControl(''),
    });
    
}
save(){
  const fname=this.name.get('fname');
  const lname=this.name.get('lname');
  const data = this.name.getRawValue()
  // console.log(fname?.value,lname?.value)
  this.service.checkLogin(data).subscribe(data => {
    console.log('data',data)
  })
}
}
