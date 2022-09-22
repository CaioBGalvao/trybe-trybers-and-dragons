import Race from './Race';

class Elf extends Race {
  static intancesNumber = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.intancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Elf.intancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;