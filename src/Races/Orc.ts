import Race from './Race';

class Orc extends Race {
  static intancesNumber = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.intancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Orc.intancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;