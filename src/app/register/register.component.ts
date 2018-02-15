import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';
import { User } from '../shared/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  private user: User = new User;

  public ngOnInit() {
  }
  public register(){
    this.authService.addUser(this.user)
      .subscribe((user)=> {
        this.router.navigateByUrl('/login');
      },
        (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        }
      );
  }

}

