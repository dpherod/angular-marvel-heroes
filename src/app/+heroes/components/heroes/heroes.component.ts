import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Hero} from "../../../core/models/hero.model";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  @Input() hero: Hero;
  @Input() heroes: Hero[];

  @Output() deleteChange = new EventEmitter<Hero>();

  constructor() {
  }

  ngOnInit() {
  }

  getHeroImage(hero: Hero): string {
    // debugger;
    if (!hero.character) {
      return `http://localhost:3000/img/jake_pong.jpg`;
    }

    return `${hero.character.thumbnail.path}/detail.${hero.character.thumbnail.extension}`
  }

}
