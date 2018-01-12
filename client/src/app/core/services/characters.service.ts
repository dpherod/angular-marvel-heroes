import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Character} from "../models/character.model";
import {MarvelResponse} from "../models/marvel-response.model";

import {MarvelService} from "./marvel.service";

@Injectable()
export class CharactersService extends MarvelService {

  // readonly BASE_URL = 'https://gateway.marvel.com/v1/public';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getCharacters(nameStartsWith?: string): Observable<Array<Character>> {
    return this.httpClient.get<MarvelResponse<Character>>(`${this.BASE_URL}/characters`, {
      params: new HttpParams().set('nameStartsWith', nameStartsWith)
    })
      .pipe(
        map(response => response.data.results)
      );
  }

}
