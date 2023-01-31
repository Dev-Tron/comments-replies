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
  id: Number;  
  content: String;  
  createdAt: String;  
  score: Number; 
  user: User;
  replies?: any[];
}  

interface CurrentUser {
  currentUser: User,
  comments: Comment[],
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

}
