import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username:string='';
  counter:Number=0;
  constructor(private router:Router) {
   }

  ngOnInit(): void {
    //this.username = "Rani"

  }

addUser():any{
 
  console.log('My name is',this.username)
  localStorage.setItem('name',JSON.stringify(this.username.toLowerCase()))
  localStorage.setItem('counter',JSON.stringify(this.counter))
  this.router.navigate(["search"])
}
}
