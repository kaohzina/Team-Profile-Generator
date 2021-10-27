//simple test to see if making an Intern works!
const Intern = require('../lib/Intern');



test('get an Intern name', () => {
  const name = 'John';
  const Intern = new Intern('John', 1, 'JohnSmith@gmail.com');

  expect(Intern.name).toBe(name);
});

test('get an Intern id', () => {
  const id = 1;
  const Intern = new Intern('John', id, 'JohnSmith@gmail.com');

  expect(Intern.id).toBe(id);
});

test('get an Intern email', () => {
  const email = 'JohnSmith@gmail.com';
  const Intern = new Intern('John', 1, email);

  expect(Intern.getEmail()).toBe(email);
});

test('get an Intern role', () => {
  const Intern = new Intern('John', 1, 'JohnSmith@gmail.com');

  expect(Intern.getRole()).toEqual("Intern");
});