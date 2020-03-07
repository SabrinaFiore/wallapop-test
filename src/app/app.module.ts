import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from './lib/modules/avatar/avatar.module';
import { DescriptionModule } from './lib/modules/description/description.module';
import { TitleModule } from './lib/modules/title/title.module';
import { PriceModule } from './lib/modules/price/price.module';
import { EmailModule } from './lib/modules/email/email.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    DescriptionModule,
    EmailModule,
    PriceModule,
    TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
