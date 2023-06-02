import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/services/users.service';
import { Iusers } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Iusers[]=[]
  userSubscription!:Subscription


   constructor(private usersService:UsersService){}
   
   ngOnInit(){
     this.getUsers()
   }

   getUsers(){
      this.userSubscription=this.usersService.getUser().subscribe(
        (res)=>{
          this.users=res
        },
        (err)=>{

        }
      )
   }
   ngOnDestroy(){
    this.userSubscription.unsubscribe()
  }
}
