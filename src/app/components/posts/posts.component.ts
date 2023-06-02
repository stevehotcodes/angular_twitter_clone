import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { Iposts } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Iposts[]=[]
  postSubscription!:Subscription


   constructor(private postService:PostsService){}

   ngOnInit(){
       this.getAllPost()
   }
  getAllPost(){
    this.postSubscription=this.postService.getPost().subscribe(
      (res)=>{
        this.posts=res
        console.log(this.posts[0].title)
      },
      (err)=>{

      }
     )
  }
  ngOnDestroy(){
    this.postSubscription.unsubscribe()
  }
}
