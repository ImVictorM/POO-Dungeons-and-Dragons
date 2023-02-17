import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  public player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  public override fight(): number {
    for (
      let round = 1; 
      this.player.lifePoints !== -1 && this.player2.lifePoints !== -1;
      round += 1
    ) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }

    return super.fight();
  }
}
const fight = (battle: Battle) => battle.fight();
const result = () => {
  const player1 = new Character('');
  for (let i = 0; i < 500; i += 1) player1.levelUp();
  const player2 = new Character('');
  const pvp1 = new PVP(player1, player2);

  const player3 = new Character('');
  for (let i = 0; i < 500; i += 1) player3.levelUp();
  const player4 = new Character('');
  const pvp2 = new PVP(player4, player3);

  return [fight(pvp1), fight(pvp2)];
};

console.log(result());

export default PVP;
