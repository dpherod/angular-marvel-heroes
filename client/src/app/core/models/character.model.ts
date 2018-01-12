import {CharacterImage} from "./character-image.model";
import {CharacterUrl} from "./character-url.model";

export interface Character {
  id: number;
  name: string;
  description: string;
  urls: CharacterUrl[];
  thumbnail: CharacterImage;
}
