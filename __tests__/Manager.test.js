//simple test to see if making an Manager works!
const Manager = require('../lib/Manager');



test('get an Manager name', () => {
  const name = 'John';
  const Manager = new Manager('John', 1, 'JohnSmith@gmail.com');

  expect(Manager.name).toBe(name);
});

test('get an Manager id', () => {
  const id = 1;
  const Manager = new Manager('John', id, 'JohnSmith@gmail.com');

  expect(Manager.id).toBe(id);
});

test('get an Manager email', () => {
  const email = 'JohnSmith@gmail.com';
  const Manager = new Manager('John', 1, email);

  expect(Manager.getEmail()).toBe(email);
});

test('get an Manager role', () => {
  const Manager = new Manager('John', 1, 'JohnSmith@gmail.com');

  expect(Manager.getRole()).toEqual("Manager");
});