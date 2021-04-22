import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  result = '';

  constructor() {
  }

  ngOnInit(): void {
    this.users = [
      new User(1, 'user 01', 'last 01', 'xxx@demo1.com', 1),
      new User(2, 'user 02', 'last 02', 'xxx@demo2.com', 2),
      new User(3, 'user 03', 'last 03', 'xxx@demo3.com', 3),
    ];
  }

onClickedFromRating(event: string): void {
  console.log('Received data from rating= ' + event);
  this.result = 'Received data from rating= ' + event;
}

}
