import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataConfig } from '../icon/icon.component';
import { Items } from 'src/app/config/config.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-row-content',
  templateUrl: './row-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RowContentComponent implements OnInit {

  @Input() items: Items = [];

  dataIconSvg: DataConfig;
  dataIconSvgOrder: DataConfig;
  
  mySvgUrl: string = '../../../../assets/icons/';
  public iconSvg: string;
  public iconSvgOrder: string;
  
  constructor(public MatDialog: MatDialog) { }

  ngOnInit() {
    this.iconSvg = this.mySvgUrl + 'star-empty';
    this.dataIconSvg = {
      src: this.iconSvg + '.svg',
      width: '20px',
    }
    this.dataIconSvgOrder = {
      src: this.mySvgUrl + 'keyboard_arrow_down' + '.svg',
      width: '20px',
    }
  }

  public toggleIcon(event: any) {
    console.log('entra');
    console.log(event);

    if (event.favorite === true) {
      event.favorite = false;
      console.log('true')
    } else {
      event.favorite = true;
      console.log('false')
    }

    this.iconSvg = this.iconSvg === this.mySvgUrl + 'star-empty' ? this.mySvgUrl + 'star-full' : this.mySvgUrl + 'star-empty'; 
    
    this.dataIconSvg = {
      src: this.iconSvg + '.svg',
      width: '20px',
    }
  }

  public toggleIconUp() {
    console.log('entraArrow');
    this.iconSvgOrder = this.iconSvgOrder === this.mySvgUrl + 'keyboard_arrow_down' ? this.mySvgUrl + 'keyboard_arrow_up' : this.mySvgUrl + 'keyboard_arrow_down'; 
    
    this.dataIconSvgOrder = {
      src: this.iconSvgOrder + '.svg',
      width: '20px',
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.MatDialog.open(ModalComponent, dialogConfig);
  }
}
