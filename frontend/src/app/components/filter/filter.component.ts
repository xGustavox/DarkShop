import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() selected = new EventEmitter()
  selectedFilter
  controllerState
  filterToShow = null
  filters = [
    {
      name: "Ordenar por",
      filters: {
        smallestPrice: "Menor preço",
        biggerPrice: "Maior preço",
        // author: "Autor",
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

  constructor() { }

  ngOnInit(): void {
  }

  OpenOptions(e, controller) {
    this.selectedFilter = e.target
    let offLeft = e.target.getBoundingClientRect().left;
    let choiceBallon = document.getElementById("choice-ballon")
    
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

  AplyFilter(f) {
    if (f != 'default') {
      this.selectedFilter.classList.add("active")
      this.selectedFilter.innerHTML = this.filters[this.controllerState].filters[f]
    }
    else {
      this.selectedFilter.classList.remove("active")
      this.selectedFilter.innerHTML = this.filters[this.controllerState].name
    }

    this.filterToShow = null
    this.controllerState = -1
    document.getElementById("choice-ballon").classList.remove("active")
    
    this.selected.emit(f)
  }
}
