import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { TableComponent } from '../../components/table/table.component';


@NgModule({
  declarations: [MainComponent, TableComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
