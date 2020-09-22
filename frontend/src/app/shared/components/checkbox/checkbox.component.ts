import { Component, OnInit, Input } from '@angular/core';
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
  @Input() darkPatterned = environment.darkPatterned
  @Input() onChange

  constructor() { }

  ngOnInit(): void {
  }

  change(e) {
    this.onChange(e)
  }
}
