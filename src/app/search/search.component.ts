import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CountryDataService } from '../services/country-data.service';

export interface countryData {
  country_name: string;
  univercity_name: string;
  stateProvince: string;
  id: string;
  domain: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  name: string = '';
  cityName: string = '';
  countryName: string = '';

  allCountries = [
    'India',
    'Pakistan',
    'USA',
    'Netherland',
    'Swizerland',
    'Brazil',
    'Africa',
  ];
  country: any;

  displayedColumns: string[] = [
    'id',
    'univercity_name',
    'stateProvince',
    'country_name',
    'domain',
  ];
  DATA: any[] = [];
  dataAvailabel: boolean = false;
  dataSource: MatTableDataSource<countryData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private countryData: CountryDataService
  ) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.name = JSON.parse(storedName);
    }
  }
  logoutUser(): any {
    localStorage.removeItem('name');
    this.router.navigate(['login']);
  }

  search(): any {
    console.log('you are searching for', this.countryName, this.cityName);
    this.countryData
      .getData(this.countryName, this.cityName)
      .subscribe((data: any) => {
        this.DATA = data.map((item: any, i: number) => {
          return {
            country_name: item.country,
            univercity_name: item.name,
            stateProvince: item['state-province'] || '-',
            id: (i + 1).toString(),
            domain: item.web_pages[0],
          };
        });
        this.dataSource = new MatTableDataSource(this.DATA);
        this.dataAvailabel = true;

        let counter = localStorage.getItem('counter') || '0';
        let value = JSON.parse(counter);
        value = value + 1;
        localStorage.setItem('counter', JSON.stringify(value));
      });
  }
}
