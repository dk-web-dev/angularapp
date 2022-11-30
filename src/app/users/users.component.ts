import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title = 'list of users';
  public userList:any=[];
  public errorMessage:string=""
  constructor(
    private _userService: UserService,
    private router : Router
    ) {}

  ngOnInit(): void {
    this._userService.getUserList().subscribe({
      next: (Response) => {
        console.log("user list",Response);
        this.userList = Response;
      },
      error: (err) =>{
         console.log("error che" , err);
         this.errorMessage = err.message;
      }, 
      complete: ()=>{
        console.log("fetching user list completed");
      }
    });
  }

  getUserId(user:any){
    console.log("id",user.id);
     this.router.navigate(['/users',user.id]);
  }
}
