import { Component, OnInit, Input } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label
  @Input() group
  @Input() checked = ""
  @Input() darkPatterned = JSON.parse(localStorage.getItem('darkPatterned')).darkPatterned
  @Input() onChange

  constructor
  (
    private gtmService: GoogleTagManagerService
  ) 
  { }

  ngOnInit(): void {
  }

  change(e) {
    this.onChange(e)
    if (this.darkPatterned) {
      this.gtmService.pushTag({
        event: 'DP-CHECKBOX-CLICKED'
      })
    }
  }
}
