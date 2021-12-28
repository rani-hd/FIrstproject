import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name:string=""
  constructor( private router:Router ) { }

  ngOnInit(): void {
   const storedName =localStorage.getItem('name')
   if(storedName){
     this.name = JSON.parse(storedName)
   }
  }
  logoutUser():any{
    localStorage.removeItem('name')
    this.router.navigate(["login"])
  }

}
