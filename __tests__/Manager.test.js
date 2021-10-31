//simple test to see if making an Manager works!
const Manager = require('../lib/Manager');


test("get an Manager role", () => {
  const role = "Manager";
  const manager = new Manager("John", 1, "JohnSmith@gmail.com", "officeNumbername");

  expect(manager.getRole()).toBe(role);
});

test("get an Manager id", () => {
  const officeNumber = "officeNumbername";
  const manager = new Manager("John", 1, "JohnSmith@gmail.com", officeNumber);

  expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test("create an manager object", () => {
  const manager = new Manager("John", 1, "JohnSmith@gmail.com", "officeNumber");

  expect(manager.officeNumber).toEqual(expect.any(String));
});

