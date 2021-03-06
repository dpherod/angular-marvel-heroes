import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {MatDialogModule, MatSnackBarModule} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HeroesModule} from "../+heroes/heroes.module";
import {environment} from "../../environments/environment";
import {HeroesService} from "../core/services/heroes.service";
import {PowersService} from "../core/services/powers.service";
import {SharedModule} from "../shared/shared.module";
import {AppEffects} from "./app.effects";
import {appMetaReducers, appReducer} from "./app.reducer";
import {HeroesEffects} from "./heroes/effects/heroes";
import * as fromHeroes from "./heroes/reducers";
import {PowersEffects} from "./powers/effects/powers";
import * as fromPowers from "./powers/reducers";
import {SnackbarEffects} from "./shared/effects/snackbar";
import {CustomRouterStateSerializer} from "./shared/utils";

@NgModule({
  imports: [
    HeroesModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }),
    StoreModule.forFeature('heroes', fromHeroes.reducers),
    StoreModule.forFeature('powers', fromPowers.reducers),
    EffectsModule.forRoot([
      AppEffects
    ]),
    EffectsModule.forFeature([
      HeroesEffects,
      PowersEffects,
      SnackbarEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    HeroesService,
    PowersService
  ]
})

export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        /**
         * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
         * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
         * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
         */
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
      ]
    };
  }
}
