import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  public monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
  }

  public override fight(): number {
    while (
      this.player.lifePoints !== -1
      && this.monsters.every((moster) => moster.lifePoints !== -1)
    ) {
      let index = 0;
      if (this.monsters[index].lifePoints !== -1) {
        this.player.attack(this.monsters[index]);
        this.monsters[index].attack(this.player);
      } else {
        index += 1;
      }
    }

    return super.fight();
  }
}

export default PVE;
