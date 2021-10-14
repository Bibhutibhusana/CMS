import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../signup/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: Array<User> = new Array<User>();
  user: User = new User;
  loginUser : User = new User;
  hide = true;
  constructor(private router: Router,private userService: UserServiceService,
      private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.userService.getUserList().subscribe((data:any) =>{
      this.userList = data;
      console.log(this.userList)
    })
  }
  onSubmit(value:any){
    //alert("Login called");
    this.userService.getUserByUserIdAndPassword(this.user).subscribe((data:any) =>{
      console.log(data,"From Login")
      this.dialog.closeAll()
      if (data[0] != undefined){
        let user = JSON.stringify(data[0])
        localStorage.setItem('user',user);
        this.router.navigate(['/teams'])
      }
      else{alert("UserId and Password Invalid!!!")}


    })
    console.log(this.user);
    console.log(value)
  }

}
