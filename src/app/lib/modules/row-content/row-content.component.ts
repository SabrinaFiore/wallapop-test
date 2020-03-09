import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataConfig } from '../icon/icon.component';
import { Items } from 'src/app/config/config.service';

@Component({
  selector: 'app-row-content',
  templateUrl: './row-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowContentComponent implements OnInit {

  @Input() items: Items = [];

  dataIconSvg: DataConfig;
  dataIconSvgAmount: DataConfig;
  dataIconSvgTitle: DataConfig;
  dataIconSvgPrice: DataConfig;

  mySvgUrl: string = '../../../../assets/icons/';
  public iconSvg: string;

  constructor() { }

  ngOnInit() {
    this.iconSvg = this.mySvgUrl + 'star-empty';
    this.dataIconSvg = {
      src: this.iconSvg + '.svg',
      width: '20px',
    }
    this.dataIconSvgAmount = {
      src: this.mySvgUrl + 'keyboard_arrow_down' + '.svg',
      width: '20px',
    }
    this.dataIconSvgTitle = {
      src: this.mySvgUrl + 'keyboard_arrow_down' + '.svg',
      width: '20px',
    }
    this.dataIconSvgPrice = {
      src: this.mySvgUrl + 'keyboard_arrow_down' + '.svg',
      width: '20px',
    }
  }

  public toggleIcon() {
    console.log('entra');
    this.iconSvg = this.iconSvg === this.mySvgUrl + 'star-empty' ? this.mySvgUrl + 'star-full' : this.mySvgUrl + 'star-empty'; 
    
    this.dataIconSvg = {
      src: this.iconSvg + '.svg',
      width: '20px',
    }
  }
}
