import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const userdata: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string='';
  counter:Number=0;
  
  constructor(private router:Router) {
   }
   users= userdata;
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =this.users;

  ngOnInit(): void {
    //this.username = "Rani"

  }

addUser():any{
 
  console.log('My name is',this.username)
  localStorage.setItem('name',JSON.stringify(this.username.toLowerCase()))
  localStorage.setItem('counter',JSON.stringify(this.counter))
  this.router.navigate(["search"])
}
clearUser():any{
  this.username=""
}
  

}
