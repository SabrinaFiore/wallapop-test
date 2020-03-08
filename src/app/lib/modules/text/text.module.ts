import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
    declarations: [TextComponent],
    imports: [
        CommonModule,
        IconModule,
    ],
    exports: [TextComponent],
})
export class TextModule { }