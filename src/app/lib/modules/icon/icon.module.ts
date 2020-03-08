import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

import { IconComponent } from './icon.component';

@NgModule({
    declarations: [IconComponent],
    imports: [
        CommonModule,
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
    ],
    exports: [IconComponent],
})
export class IconModule { }