import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  title = 'single user detail';
  public userId: any="";
  public singleUserDetail: any = [];
  public errorMessage: string = '';
  
 
 

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id  = this.route.snapshot.paramMap.get('id');
    this.getData(id);
    
  }
   //common function
   getData(id:any){
    
    this.userId = id;
    this._userService.singleUserById(this.userId).subscribe({
      next: (res) => {
        console.log('single user', res);
        this.singleUserDetail = res;
      },
      error: (err) => {
        console.log('error che pakka', err);
        this.errorMessage = err.message;
      },
      complete: () => {
        console.log('single user list fetch successfully');
      },
    });
  }

  goPrevious() {
    let previousId = this.userId - 1;
    console.log("previous id",previousId);
    this.router.navigate(['/users',previousId]);
    this.getData(previousId);
  
  }
  goNext() {
    let nextId = this.userId + 1;
    console.log("next Id",nextId);
    this.router.navigate(['/users',nextId]);
    this.getData(nextId);
  }

 

}
