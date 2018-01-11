import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {MarvelInterceptor} from "./interceptors/marvel.interceptor";
import {CharactersService} from "./services/characters.service";

import {HeroesService} from "./services/heroes.service";
import {MarvelService} from "./services/marvel.service";
import {PowersService} from "./services/powers.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    CharactersService,
    HeroesService,
    MarvelService,
    PowersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
