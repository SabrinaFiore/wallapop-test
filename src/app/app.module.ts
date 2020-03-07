import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from './lib/modules/avatar/avatar.module';
import { DescriptionModule } from './lib/modules/description/description.module';
import { TitleModule } from './lib/modules/title/title.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    DescriptionModule,
    TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
