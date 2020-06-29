import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/special']);
    },
      err => console.log(err)
    );
  }

}
