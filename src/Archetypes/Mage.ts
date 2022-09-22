import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static intancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.intancesNumber += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.intancesNumber;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Mage;