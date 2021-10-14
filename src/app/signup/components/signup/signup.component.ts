import {UserServiceService} from './../../../services/user-service.service';

import {FormBuilder} from '@angular/forms';
import {FormGroup} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user : User = new User();
  hide = true;
  userForm = new FormGroup({}); 
  constructor(
    private userService:UserServiceService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
	  this.reloadData();
	  this.reloadForm();
  }
  onSubmit(){
    console.log(this.userForm.value)
    //this.createUser(this.user);
    
  }
  
  reloadData(){
	  
  }
  reloadForm(){
	  this.userForm = this.fb.group({
		  id:[null],
		  userId:[null],
		  fullName:[null],
		  password:[null],
		  dob:[new Date()],
	  });
  }
   createUser(user:any){
     this.userService.createUser(user).subscribe((data:any) =>{
       console.log(data);
       this.dialog.closeAll();
       this.router.navigate(['/login'])
     })
   }

}
