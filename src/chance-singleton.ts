import Chance from "chance";

let chanceInstance = null;

export function getChance(): Chance {
  if (!chanceInstance) {
    chanceInstance = new Chance();
  }
  return chanceInstance;
}
