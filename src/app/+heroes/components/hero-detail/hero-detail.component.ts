import {Component, Input, OnInit} from '@angular/core';
import {CharacterUrl} from '../../../core/models/character-url.model';
import {Hero} from '../../../core/models/hero.model';
import {Power} from '../../../core/models/power.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Input() powers: Power[];

  constructor() {
  }

  //check marvel api documentation

  ngOnInit() {
  }

  getHeroImage(): string {
    return `${this.hero.character.thumbnail.path}/detail.${this.hero.character.thumbnail.extension}`
  }

  getCharacterUrlByType(type: 'detail' | 'wiki' | 'comicLink'): CharacterUrl {
    return this.hero.character.urls.find(url => url.type === type);
  }

  hasCharacterUrlByType(type: "detail" | "wiki" | "comiclink"): boolean {
    const urls = this.hero.character.urls;
    return urls.map(url => url.type).indexOf(type) > -1;
  }
}
