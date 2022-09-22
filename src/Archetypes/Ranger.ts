import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static intancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.intancesNumber += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.intancesNumber;
  }

  get energyType(): EnergyType { return this._energyType; }
}

export default Ranger;