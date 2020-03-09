import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  items: [] = [];

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    private ConfigService : ConfigService) { }

  ngOnInit() {
    this.items = this.ConfigService.getItems();
    console.log(this.items);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
