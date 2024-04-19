import { suggestListPosition } from "./suggestListPosition.type";
import { ElementPosition } from "./ElementPosition.type";

export interface suggestListPositionStore {
  suggestListPosition: suggestListPosition;
  updateSuggestListPosition: (ElementPosition: ElementPosition) => void;
}
