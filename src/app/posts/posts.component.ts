import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { Observable } from 'rxjs';
//import { webAuth } from '';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data 
    );

//     webAuth.authorize({
//   //Any additional options can go here
// });

const array = [
  { id: 333, email: 'rohan.t@gmail.com' },
  { id: 334, email: 'rohan.t+1@gmail.com' },
  { id: 335, email: 'rohan.t+2@gmail.com' },
  { id: 336, email: 'rohan.t+3@gmail.com' },
  { id: 337, email: 'rohan.t+4@gmail.com' },
  { id: 338, email: 'rohan.t+5@gmail.com' },
  { id: 339, email: 'rohan.t+6@gmail.com' },
  { id: 340, email: 'rohan.t+7@gmail.com' }
];
  let count=0;
  for(var num=0;num<array.length;num++) {
   
   if(array[num]['id'] == 336 && count==0) {
     count=1;
    console.log(array[num]['email']);
    this.data.Login();
    break;
   }
   else
     count=0;
}
  return this.data.Login();

    // this.data.Signup(array[num]['email']).subscribe(result => {        
    //     console.log(result);
  }

}