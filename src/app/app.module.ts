import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { PackageComponent } from './package/package.component';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
    TestComponent,
      
       FirstComponent,
       AboutComponent,
       PriceComponent,
       ReviewComponent,
       ContactComponent,
       PackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
