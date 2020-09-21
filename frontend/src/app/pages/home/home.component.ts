import { Component, OnInit } from '@angular/core';
import { BlurService } from 'src/app/services/blur/blur.service';
import { ConnectService } from 'src/app/services/connect/connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groupProducts = []

  constructor(
    private conn: ConnectService,
    private blurService: BlurService
  ) 
  { }

  ngOnInit(): void {
    this.conn.get('products_group', {}).subscribe((res: any) => {
      console.log(res);
      
      this.groupProducts = res
    })
  }
}
