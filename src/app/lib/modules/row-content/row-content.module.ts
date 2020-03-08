import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowContentComponent } from './row-content.component';

import { AvatarModule } from './../avatar/avatar.module';
import { TextModule } from './../text/text.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
    declarations: [RowContentComponent],
    imports: [
        CommonModule,
        AvatarModule,
        TextModule,
        IconModule,
    ],
    exports: [RowContentComponent],
})
export class RowContentModule { }