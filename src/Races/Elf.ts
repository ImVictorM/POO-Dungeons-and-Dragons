import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static createdInstances: number;

  constructor() {
    super('Elf', 10);
    this._maxLifePoints = 99;
    Elf.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Elf.createdInstances;
  }
}

export default Elf;
