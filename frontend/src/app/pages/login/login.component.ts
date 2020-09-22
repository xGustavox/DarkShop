import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

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
    private userService: UserService,
    private loading: LoadingService

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
    this.loading.show()
    this.userService.setUser(this.loginForm.value.name, this.loginForm.value.email).subscribe((res) => {
      this.router.navigate(['welcome'])
      this.loading.dismiss()
    }, err => {
      console.log(err)
    })
  }
}
