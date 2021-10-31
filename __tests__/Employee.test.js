//simple test to see if making an employee works!
const Employee = require('../lib/Employee');

//create employee object
test('create an employee object', () => {
  const employee = new Employee('John', 1, 'JohnSmith@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});


test('get an employee name', () => {
  const name = 'John';
  const employee = new Employee('John', 1, 'JohnSmith@gmail.com');

  expect(employee.getName()).toBe(name);
});

test('get an employee id', () => {
  const id = 1;
  const employee = new Employee('John', id, 'JohnSmith@gmail.com');

  expect(employee.getId()).toBe(id);
});

test('get an employee email', () => {
  const email = 'JohnSmith@gmail.com';
  const employee = new Employee('John', 1, email);

  expect(employee.getEmail()).toBe(email);
});

test('get an employee role', () => {
  const employee = new Employee('John', 1, 'JohnSmith@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});