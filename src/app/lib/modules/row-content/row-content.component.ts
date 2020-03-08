import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-content',
  templateUrl: './row-content.component.html',
})
export class RowContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public icon = 'star-empty';

  public toggleIcon() {
    if (this.icon === 'star-empty') {
      this.icon == 'star-empty';
    } else {
      this.icon = "star-full"
    }
  }
}
