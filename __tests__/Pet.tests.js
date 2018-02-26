const { Pet } = require('../src/Pet');


test ('Pet creates a new pet object with a name property', () => {
  const Fido = new Pet('Fido')
  expect(Fido.name).toEqual('Fido');
});

test ('growUp adds 1 year to pets age', () => {
  const Fido = new Pet('Fido')
  Fido.growUp();
  expect(Fido.age).toEqual(1);
});
