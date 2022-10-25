import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './shared/table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class GoodExampleModule {}
