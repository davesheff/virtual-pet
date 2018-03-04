const { Pet } = require('../src/Pet');

describe('constructor', () => {
  
  test ('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  }); 
  
  test ('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  test('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  test('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });

  test('has an initial fitness of 10', () => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
  });

  test ('growUp adds 1 year to pets age', () => {
    const Fido = new Pet('Fido');
    Fido.growUp();
    expect(Fido.age).toEqual(1);
  });

  test ('growUp adds 5 to pets hunger', () => {
    const Fido = new Pet('Fido');
    Fido.growUp();
    expect(Fido.hunger).toEqual(5);
  });

  test ('growUp reduces fitness by 3', () => {
    const Fido = new Pet('Fido');
    Fido.growUp();
    expect(Fido.fitness).toEqual(7);
  });

  test ('walk increases fitness by 4 but only to a maximum of 10', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 9;
    Fido.walk();
    expect(Fido.fitness).toEqual(10);
    Fido.fitness = 4;
    Fido.walk();
    expect(Fido.fitness).toEqual(8);
  });

  test ('feed reduces hunger by 3 but minimum hunger is 0', () => {
    const Fido = new Pet('Fido');
    Fido.hunger = 4;
    Fido.feed();
    expect(Fido.hunger).toEqual(1);
    Fido.hunger = 2;
    Fido.feed();
    expect(Fido.hunger).toEqual(0);
  });

  test ('checkUp returns "I need a walk" if fitness is 3 or less', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 2;
    expect(Fido.checkUp()).toEqual('I need a walk');
  });

  test ('checkUp returns "I am hungry" if hunger is 5 or more', () => {
    const Fido = new Pet('Fido');
    Fido.hunger = 7;
    expect(Fido.checkUp()).toEqual('I am hungry');
  });

  test ('checkUp returns "I am hungry AND I need a walk" if fitness is 3 or less and hunger is 5 more', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 2;
    Fido.hunger = 7;
    expect(Fido.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  test ('checkUp returns "I feel great!" if fitness is more than 3 and hunger is less than 5', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 7;
    Fido.hunger = 4;
    expect(Fido.checkUp()).toEqual('I feel great!');
  });

  test ('isAlive returns false if fitness is 0', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 0;
    expect(Fido.isAlive).toBe(false);
  });

  test ('isAlive returns false if hunger is 10 or more', () => {
    const Fido = new Pet('Fido');
    Fido.hunger = 10;
    expect(Fido.isAlive).toBe(false);
  });

  test ('isAlive returns false if age is 30 or more', () => {
    const Fido = new Pet('Fido');
    Fido.age = 30;
    expect(Fido.isAlive).toBe(false);
  });

  test ('isAlive returns true if age is under 30, hunger is less than 10 and fitness is above 0', () => {
    const Fido = new Pet('Fido');
    Fido.fitness = 6;
    Fido.hunger = 8;
    Fido.age = 15;
    expect(Fido.isAlive).toBe(true);
  });
});
