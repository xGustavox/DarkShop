import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() label: string
  @Input() price: Number
  @Input() disabledButton: boolean
  @Input() classes: string = ""
  @Input() onClick: any

  constructor() { }

  ngOnInit(): void { 
  }

  // Executa o método passado como Input para o botão
  click() {
    if (this.onClick)
      this.onClick()
    else
      console.log('Function not defined');
  }
}
