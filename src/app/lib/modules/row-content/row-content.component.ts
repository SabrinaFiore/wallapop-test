import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataConfig } from '../icon/icon.component';
import { Items, ConfigService } from 'src/app/config/config.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-row-content',
  templateUrl: './row-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RowContentComponent implements OnInit {

  @Input() items: Items = [];

  email: boolean = false;
  description: boolean = false;
  price: boolean = false;
  title: boolean = false;
  dataIconSvgOrder: DataConfig;
  mySvgUrl: string = '../../../../assets/icons/';
  public iconSvg: string;
  public iconSvgOrder: string;
  
  constructor(public MatDialog: MatDialog, private ConfigService : ConfigService) { }

  ngOnInit() {
    this.iconSvg = this.mySvgUrl + 'star-empty';

    this.dataIconSvgOrder = {
      src: this.mySvgUrl + 'keyboard_arrow_down' + '.svg',
      width: '20px',
    }
  }

  public toggleIcon(items, item) {
    item.favorite = !item.favorite;
    this.ConfigService.setItems(items);
  }

  public toggleIconUp(column) {
    switch(column) {
      case 'title':
        this.title = !this.title;
        if(this.title) {
          this.items.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
        } else {
          this.items.sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0));
        }
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "800px";
    const modalDialog = this.MatDialog.open(ModalComponent, dialogConfig);
  }
}
