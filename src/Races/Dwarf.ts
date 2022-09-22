import Race from './Race';

class Dwarf extends Race {
  static intancesNumber = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.intancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.intancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;