import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static createdInstances: number;

  constructor() {
    super('Orc', 10);
    this._maxLifePoints = 74;
    Orc.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc.createdInstances;
  }
}

export default Orc;
