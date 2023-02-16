import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static createdInstances: number;

  constructor() {
    super('Dwarf', 10);
    this._maxLifePoints = 80;
    Dwarf.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Dwarf.createdInstances;
  }
}

export default Dwarf;
