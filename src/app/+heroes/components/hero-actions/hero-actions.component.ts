import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Hero} from "../../../core/models/hero.model";

@Component({
  selector: 'app-hero-actions',
  templateUrl: './hero-actions.component.html',
  styleUrls: ['./hero-actions.component.scss']
})
export class HeroActionsComponent {

  @Output() deleteChange = new EventEmitter<Hero>();

  @Input() hero: Hero;

  constructor() {
  }

}
