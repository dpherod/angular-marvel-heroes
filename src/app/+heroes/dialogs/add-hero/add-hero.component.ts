import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatAutocompleteSelectedEvent, MatDialogRef, MatSnackBar} from "@angular/material";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {debounceTime, switchMap} from "rxjs/operators";
import {Character} from "../../../core/models/character.model";
import {Hero} from "../../../core/models/hero.model";
import {Power} from "../../../core/models/power.model";
import {CharactersService} from "../../../core/services/characters.service";
import {HeroesService} from "../../../core/services/heroes.service";
import {PowersService} from "../../../core/services/powers.service";
import {AddHero} from "../../../state/heroes/actions/heroes";
import {HeroesState} from "../../../state/heroes/reducers";
import {LoadPowers} from "../../../state/powers/actions/powers";
import {getAllPowers, PowersState} from "../../../state/powers/reducers";


@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  character: Character;
  characters: Observable<Array<Character>>;
  form: FormGroup;

  powers: Observable<Array<Power>>;

  private selectedPowers: Array<Power>;

  constructor(private matDialogRef: MatDialogRef<AddHeroComponent>,
              private formBuilder: FormBuilder,
              private characterService: CharactersService,
              private heroesService: HeroesService,
              private matSnackBar: MatSnackBar,
              private powersService: PowersService,
              private store: Store<HeroesState | PowersState>) {
  }

  ngOnInit() {
    // debugger;
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    // this.powers = this.powersService.getPowers();
    this.powers = this.store.select(getAllPowers);
    this.store.dispatch(new LoadPowers());

    // this.characters = this.characterService.getCharacters();

    this.characters = this.form.get('name')
      .valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.filter(value))
      );
  }

  close() {
    this.matDialogRef.close();
  }

  characterSelected(event: MatAutocompleteSelectedEvent) {
    // debugger;
    this.character = event.option.value;
  }

  displayCharacterAutoComplete(character: Character): string {
    if (character) {
      return character.name;
    }
    return '';
  }

  filter(name: string): Observable<Array<Character>> {
    if (name.length === 0) {
      return of([]);
    }
    return this.characterService.getCharacters(name);
  }

  onPowerChange(powers: Power[]) {
    this.selectedPowers = powers;
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    // const hero = <Hero>this.form.value;
    // console.log('hero: ', hero);
    // this.store.dispatch(new AddHero(hero));

    const hero = <Hero>this.form.value;
    console.log('hero: ', hero);

    hero.character = this.character;
    hero.powers = this.selectedPowers.map(power => power.id);

    this.store.dispatch(new AddHero(hero));

    // this.heroesService.createHero({
    //   character: this.character,
    //   powers: this.selectedPowers.map(power => power.id)
    // }).subscribe(() => this.close());
  }

}
