import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor
  (
    private router: Router,
    private title: Title
  ) 
  { 
    title.setTitle('Obrigado!')
    this.Voltar = this.Voltar.bind(this)
  }

  ngOnInit(): void {
  }

  Voltar() {
    this.router.navigate(['tabs', 'home'])
  }

}
