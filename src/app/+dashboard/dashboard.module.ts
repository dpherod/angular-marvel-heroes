import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule} from "@angular/material";
import {RouterModule} from "@angular/router";

import {IndexComponent} from './containers/index/index.component';

import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [IndexComponent]
})
export class DashboardModule {
}
