import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BadExampleModule } from './bad-example/bad-example.module';
import { HomeComponent } from './bad-example/home/home.component';
import { TableComponent } from './bad-example/shared/table/table.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BadExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
