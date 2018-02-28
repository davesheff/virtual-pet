const MAXIMUM_FITNESS = 10;

function Pet (name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
  growUp: function () {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk: function () {
    if (this.fitness >= 7) {
      this.fitness = MAXIMUM_FITNESS
    } else { 
      this.fitness += 4;
    }
  },
  feed: function () {
    if (this.hunger < 3) {
      this.hunger = 0;
    } else {
      this.hunger -= 3;
    }
  },
  checkUp: function () {
    if (this.fitness < 4 && this.hunger > 4) {
      return 'I am hungry AND I need a walk'
    } else if (this.fitness < 4) {
      return 'I need a walk'
    } else if (this.hunger > 4) {
      return 'I am hungry'
    } else { 
      return 'I feel great!'
    }
  }
}

module.exports = {
  Pet
}
