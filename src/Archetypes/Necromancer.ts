import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static intancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.intancesNumber += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.intancesNumber;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Necromancer;