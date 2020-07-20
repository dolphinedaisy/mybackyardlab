import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  stu_email: string;
  stu_password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignIn() {
    if (this.stu_email === 'dhwanij2@gmail.com' && this.stu_password === 'dhj2494') {
      this.router.navigate(['/home']);
    }
  }

}
