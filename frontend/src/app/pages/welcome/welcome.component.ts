import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user
  userName
  quickMessage
  howItWorks

  constructor
  (
    private router: Router,
    private userService: UserService,
    private title: Title
  ) 
  { 
    title.setTitle('Bem vindo!')
    this.user = userService.getUser()

    if (this.user.anonymous) {
      this.userName = 'Humano'
      this.quickMessage = "Que bom, você irá me ajudar!"
      this.howItWorks = "Navegue no website e compre qualquer produto."
    }
    else {
      this.userName = this.user.nickname
      this.quickMessage = "Vou te explicar como funciona o site"
      this.howItWorks = "Você tem R$ 100 reais para gastar"
    }

    this.GoShopping = this.GoShopping.bind(this)
  }

  ngOnInit(): void {
  }

  GoShopping() {
    if (this.user.anonymous)
      this.router.navigate(['tabs', 'home'])
    else
      this.router.navigate(['terms-use'])
  }
}
