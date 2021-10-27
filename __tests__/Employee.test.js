//simple test to see if making an employee works!
const Employee = require('../lib/Employee');

//create employee object
test('create an employee object', () => {
  const employee = new Employee('John', 1, 'JohnSmith@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});