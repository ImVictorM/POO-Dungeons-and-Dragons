import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  public player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  public override fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }

    return super.fight();
  }
}

export default PVP;
