abstract class Race {
  protected _name: string;
  protected _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race; 