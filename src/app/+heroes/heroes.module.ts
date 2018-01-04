import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeroesRoutingModule } from "./heroes-routing.module";

import { IndexComponent } from './containers/index/index.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './containers/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroActionsComponent } from './components/hero-actions/hero-actions.component';
import { EditComponent } from './containers/edit/edit.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { PowerChipListComponent } from './components/power-chip-list/power-chip-list.component';
import {AddHeroComponent} from "./dialogs/add-hero/add-hero.component";
import {AddPowerComponent} from "../+powers/dialogs/add-power/add-power.component";
import {SharedModule} from "../shared/shared.module";
import {PowersRoutingModule} from "../+powers/powers-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    AddHeroComponent
  ],
  declarations: [IndexComponent, HeroesComponent, HeroComponent, HeroDetailComponent, HeroActionsComponent, EditComponent, EditHeroComponent, PowerChipListComponent, AddHeroComponent
    ]
})
export class HeroesModule {
}
