import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  name:string=""
  constructor() { }

  ngOnInit(): void {
   const storedName =localStorage.getItem('name')
   if(storedName){
     this.name = JSON.parse(storedName)
   }
  }

}
