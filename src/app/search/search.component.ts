import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CountryDataService} from '../services/country-data.service'
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name:string="";
  cityName:string=""
  countryName:string=""
  allCountries = ['India','Pakistan','USA','Netherland','Swizerland','Brazil','Africa']

  country:any;
  constructor( private router:Router,private countryData:CountryDataService) { 
    
  }

  users= userdata;
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =this.users;

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

  search():any{
    console.log('you are searching for',this.countryName,this.cityName)
    this.countryData.getData(this.countryName,this.cityName).subscribe((data)=>{
      console.log("data",data);
      let counter=localStorage.getItem('counter')||'0';
      let value=JSON.parse(counter)
      value = value +1;
      localStorage.setItem('counter',JSON.stringify(value));
    })
  }

}
