//simple test to see if making an Engineer works!
const Engineer = require('../lib/Engineer');



test('get an Engineer name', () => {
  const name = 'John';
  const Engineer = new Engineer('John', 1, 'JohnSmith@gmail.com');

  expect(Engineer.name).toBe(name);
});

test('get an Engineer id', () => {
  const id = 1;
  const Engineer = new Engineer('John', id, 'JohnSmith@gmail.com');

  expect(Engineer.id).toBe(id);
});

test('get an Engineer email', () => {
  const email = 'JohnSmith@gmail.com';
  const Engineer = new Engineer('John', 1, email);

  expect(Engineer.getEmail()).toBe(email);
});

test('get an Engineer role', () => {
  const Engineer = new Engineer('John', 1, 'JohnSmith@gmail.com');

  expect(Engineer.getRole()).toEqual("Engineer");
});