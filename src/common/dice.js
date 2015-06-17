import _ from 'lodash';

class Dice {
  rollDie(sides = 6) {
    return 1 + Math.floor(Math.random() * sides);
  }

  rollDice(dice = 3) {
    return [1,2,3].map(() => { return this.rollDie() }).sort();
  }

  match(dice) {
    let count = 1, score;
    for (let i = 1; i < dice.length; i++) {
      if (dice[i-1] === dice[i]) {
        count++;
        score = dice[i];
      }
    }
    return {count, score}
  }

  roll() {
    dice = this.rollDice();
    let matches = this.match(dice);
    console.log(dice);
    if (_.isEqual(dice, [4,5,6])){
      console.log('ceelo - you win');
    }
    else if (_.isEqual(dice, [1,2,3])) {
      console.log('you lose');
    }
    else if (matches.count === 2) {
      console.log('double ' + matches.score);
    }
    else if (matches.count === 3) {
      console.log('triple ' + matches.score);
    }
  }
}

let dice = new Dice();

export default dice;