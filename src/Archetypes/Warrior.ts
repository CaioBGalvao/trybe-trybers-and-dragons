import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static intancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.intancesNumber += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.intancesNumber;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Warrior;