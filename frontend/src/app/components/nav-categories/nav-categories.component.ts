import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlurService } from 'src/app/services/blur/blur.service';

@Component({
  selector: 'nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {

  type = 1 // Tipo do grupo de produto
  @Output() categoryChange = new EventEmitter()

  constructor(
    private blurService: BlurService
  ) { }

  ngOnInit(): void {
  }

  /* Emite um evento com o tipo do grupo selecionado 
  e seta os estilos ativos das tabs */
  Click(category) {
    this.type = category

    document.querySelectorAll('.nav').forEach(n => n.classList.remove('active'))
    document.querySelector('.type' + this.type).classList.add('active')

    this.categoryChange.emit(category)
    /* Necessário chamar o método para borrar as tabs por 
    causa do conteúdo novo */
    this.blurService.Blur()
  }
}
