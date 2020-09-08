import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label
  @Input() group
  @Input() checked = ""
  @Input() darkPatterned = false
  @Input() onChange

  constructor() { }

  ngOnInit(): void {
  }

  change(e) {
    this.onChange(e)
  }
}
