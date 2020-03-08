import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from './lib/modules/avatar/avatar.module';
import { TextModule } from './lib/modules/text/text.module';
import { RowContentModule } from './lib/modules/row-content/row-content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    TextModule,
    RowContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
