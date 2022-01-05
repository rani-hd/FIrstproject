import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  counter: Number = 0;
  constructor(private router: Router,private authService: AuthService) {}
  ngOnInit(): void {
    // this.username = "Rani"
  }

  addUser(): any {
    if (this.username == '') {
      alert('Please enter name');
    } else {
      console.log('My name is', this.username);
      localStorage.setItem('name', JSON.stringify(this.username.toLowerCase()));
      localStorage.setItem('counter', JSON.stringify(this.counter));
      const authValue = this.authService.login(this.username);
      if(authValue == true){
        this.router.navigate(['search']);
      }
    }
  }

  clearUser(): any {
    this.username = '';
  }
}
