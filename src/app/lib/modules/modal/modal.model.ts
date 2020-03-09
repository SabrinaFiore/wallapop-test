import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

import { TextModule } from './../text/text.module';
import { IconModule } from '../icon/icon.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        TextModule,
        IconModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [ModalComponent],
})
export class ModalModule { }