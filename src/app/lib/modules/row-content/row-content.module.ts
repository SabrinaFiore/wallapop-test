import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowContentComponent } from './row-content.component';

@NgModule({
    declarations: [RowContentComponent],
    imports: [
        CommonModule,
    ],
    exports: [RowContentComponent],
})
export class RowContentModule { }