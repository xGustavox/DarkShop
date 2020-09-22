import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BlurService } from 'src/app/services/blur/blur.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('choiceBallon') choiceBallon: ElementRef
  @Output() selected = new EventEmitter()

  selectedFilter
  controllerState
  // Array of filters
  filterToShow = null
  filters = [
    {
      name: "Ordenar por",
      filters: {
        smallestPrice: "Menor preço",
        biggerPrice: "Maior preço",
        default: "Limpar ordenação"
      },
    },
    {
      name: "Faixa de preço",
      filters: {
        to25: "Até R$ 25",
        to50: "Até R$ 50",
        to100: "Até R$ 100",
        default: "Limpar faixa de preço"
      }
    }
  ]

  constructor(
    private blurService: BlurService
  ) { }

  ngOnInit(): void {
  }

  // Abre os filtros com as opçoes corretas e controla seu posicionamento na tela
  // e -> Click event
  // controller -> Indice dos filtros no array filters
  OpenOptions(e, controller) {
    this.selectedFilter = e.target

    const offLeft = this.selectedFilter.getBoundingClientRect().left;
    const choiceBallon = this.choiceBallon.nativeElement
    
    if (controller == this.controllerState) {
      choiceBallon.classList.remove("active")
      this.controllerState = -1
      this.filterToShow = null
    }
    else {
      this.controllerState = controller
      this.filterToShow = Object.keys(this.filters[controller].filters)
      
      choiceBallon.style.left = `${offLeft}px`
      choiceBallon.classList.add("active")
    }
  }

  // Emite o evento passando como valor a chave do array de filtros
  AplyFilter(f) {
    if (f != 'default') {
      // Aplica a classe active no botão com filtro ativo
      this.selectedFilter.classList.add("active")
      // Aplica o nome do filtro no botão
      this.selectedFilter.innerHTML = this.filters[this.controllerState].filters[f]
    }
    else {
      // Limap aformatação do botão para o padrão
      this.selectedFilter.classList.remove("active")
      this.selectedFilter.innerHTML = this.filters[this.controllerState].name
    }

    this.ResetFilterState()
    // Emite o nome do filtro selecionado
    this.selected.emit(f)
    this.blurService.Blur()
  }

  ResetFilterState() {
    this.filterToShow = null
    this.controllerState = -1
    this.choiceBallon.nativeElement.classList.remove("active")
  }
}
