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
    const Fido = new Pet('Fido')
    Fido.growUp();
    expect(Fido.age).toEqual(1);
  });

  test ('growUp adds 5 to pets hunger', () => {
    const Fido = new Pet('Fido')
    Fido.growUp();
    expect(Fido.hunger).toEqual(5);
  });

  test ('growUp reduces fitness by 3', () => {
    const Fido = new Pet('Fido')
    Fido.growUp();
    expect(Fido.fitness).toEqual(7);
  });

  test ('walk increases fitness by 4 but only to a maximum of 10', () => {
    const Fido = new Pet('Fido')
    Fido.fitness = 9;
    Fido.walk();
    expect(Fido.fitness).toEqual(10);
    Fido.fitness = 4;
    Fido.walk();
    expect(Fido.fitness).toEqual(8);
  });

  test ('feed reduces hunger by 3 but minimum hunger is 0', () => {
    const Fido = new Pet('Fido')
    Fido.hunger = 4
    Fido.feed();
    expect(Fido.hunger).toEqual(1);
    Fido.hunger = 2
    Fido.feed();
    expect(Fido.hunger).toEqual(0);
  });

  test ('checkUp returns "I need a walk" if fitness is 3 or less', () => {
    const Fido = new Pet('Fido')
    Fido.fitness = 2
    expect(Fido.checkUp()).toEqual('I need a walk');
  });

});
