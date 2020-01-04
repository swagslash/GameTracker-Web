import {Tag} from "./tag";

export interface Game {
  gameId: string;
  dbGameId: string;
  name: string;
  imageId: string;
  tags: Array<Tag>;
}
