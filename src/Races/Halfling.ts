import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static createdInstances: number;

  constructor() {
    super('Halfling', 10);
    this._maxLifePoints = 60;
    Halfling.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling.createdInstances;
  }
}

export default Halfling;
