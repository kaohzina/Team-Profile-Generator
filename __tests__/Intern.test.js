//simple test to see if making an Intern works!
const Intern = require('../lib/Intern');

test("get an intern role", () => {
  const role = "Intern";
  const intern = new Intern("John", 1, "JohnSmith@gmail.com", "githubname");

  expect(intern.getRole()).toBe(role);
});

test("get an intern id", () => {
  const school = "githubname";
  const intern = new Intern("John", 1, "JohnSmith@gmail.com", school );

  expect(intern.getSchool()).toBe(school);
});

test("create an intern object", () => {
  const intern = new Intern("John", 1, "JohnSmith@gmail.com", "github");

  expect(intern.school).toEqual(expect.any(String));
});
