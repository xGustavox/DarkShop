import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor
  (
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService

  ) 
  { 
    this.loginForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  Login() {
    this.userService.setUser(this.loginForm.value.name, this.loginForm.value.email)
    this.router.navigate(['welcome'])
  }
}
