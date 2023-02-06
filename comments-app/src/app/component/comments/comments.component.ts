import { Component, OnInit } from '@angular/core';
import commentsData from '../../../assets/data.json';  

interface User {
  "image": {
    "png": String,
    "webp": String,
  }
  "username": String
}

interface Comment {  
  id: number;  
  content: String;  
  createdAt: String;  
  score: number; 
  user: User;
  replies?: any[];
}  

interface CurrentUser {
  currentUser: User,
  comments: Comment[]
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})

export class CommentsComponent implements OnInit {
    currentUser: CurrentUser = commentsData;
    constructor(){
     
    }
  
    ngOnInit(){
      console.log( commentsData )
    }
   
      scoreChange (id: number, op: number) {

        for (let i in this.currentUser.comments) {
          if (this.currentUser.comments[i].id == id) {
            if (op == 1)
              this.currentUser.comments[i].score = this.currentUser.comments[i].score + 1;
            else
              this.currentUser.comments[i].score = this.currentUser.comments[i].score - 1;
            break;
          }
        }
    
      }

}
