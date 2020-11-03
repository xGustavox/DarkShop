import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-use',
  templateUrl: './terms-use.component.html',
  styleUrls: ['./terms-use.component.scss']
})
export class TermsUseComponent implements OnInit {

  checkBoxes = {
    termsAccepted: false,
    helpResearch: true
  }

  constructor
  (
    private router: Router,
    private title: Title
  ) 
  { 
    title.setTitle('Termos de uso')
    this.validateAndNavigate = this.validateAndNavigate.bind(this)
    this.termsAccepted = this.termsAccepted.bind(this)
    this.helpResearch = this.helpResearch.bind(this)
  }

  ngOnInit(): void {
  }

  validateAndNavigate() {
    if (this.checkBoxes.termsAccepted && this.checkBoxes.helpResearch)
      this.router.navigate(['tabs', 'home'])
  }

  termsAccepted(e) {
    this.checkBoxes.termsAccepted = e.target.checked
    
  }

  helpResearch(e) {
    this.checkBoxes.helpResearch = e.target.checked
  }
}
