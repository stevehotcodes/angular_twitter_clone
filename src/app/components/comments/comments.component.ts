import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icomments } from 'src/app/interfaces';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit,OnDestroy{
  comments:Icomments[]=[]
  commentSubscription!:Subscription

  constructor(private commentService:CommentsService){}
   

      ngOnInit(){
        this.getComments()
      }
      getComments(){
      this.commentSubscription=this.commentService.getComment().subscribe(
        (res)=>{
          this.comments=res
          console.log("thes are comments:", res)
        }
      )
    }

    ngOnDestroy(){
      this.commentSubscription.unsubscribe()
    }
}
