import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlurService } from 'src/app/core/services/blur/blur.service';
import { ConnectService } from 'src/app/core/services/connect/connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groupProducts = []

  constructor(
    private conn: ConnectService,
    private blurService: BlurService,
    private title: Title
  ) 
  { 
    title.setTitle('DarkShop')
  }

  ngOnInit(): void {
    this.conn.get('products_group', {}).subscribe((res: any) => {
      this.groupProducts = res
    })
  }
}
