import Race from './Race';

class Halfling extends Race {
  static intancesNumber = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.intancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.intancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;