import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { Title } from '@angular/platform-browser';
import { of, pipe } from 'rxjs'
import { debounceTime } from 'rxjs/operators';

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
    private loading: LoadingService,
    private title: Title
  ) 
  { 
    title.setTitle('Login')
    
    this.loginForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
 
    this.loginForm.controls.email.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((res: any) => {
      this.loginForm.controls.email.setValue(res.trim())
    })
  }

  ngOnInit(): void {
  }

  LoginNoInfo() {
    this.userService.setAnonimousUser()
    this.router.navigate(['welcome'])
  }

  Login() {
    this.loading.show()

    this.userService.setUser(this.loginForm.value.name, this.loginForm.value.email).then(data => {
      data.subscribe((res) => {
        this.router.navigate(['welcome'])
        this.loading.dismiss()
      }, err => {
        console.log(err)
      })
    })
  }
}
