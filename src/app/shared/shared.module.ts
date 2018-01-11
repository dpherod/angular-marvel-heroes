import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatSidenavModule, MatToolbarModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {DialogHeaderComponent} from './components/dialog-header/dialog-header.component';

import {LayoutComponent} from "./components/layout/layout.component";
import {AddPowerComponent} from "./dialogs/add-power/add-power.component";

const components = [
  AddPowerComponent,
  DialogHeaderComponent,
  LayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    AddPowerComponent
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule {
}
