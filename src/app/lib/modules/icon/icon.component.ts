import { Component, OnInit, Input } from '@angular/core';

export interface DataConfig {
  src: string;
  width: string;
}

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})

export class IconComponent implements OnInit {

  @Input() dataIcon: object;

  constructor() { }

  ngOnInit() {
  }
}
