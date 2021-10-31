//simple test to see if making an Engineer works!
const Engineer = require("../lib/Engineer");

test("get an Engineer role", () => {
  const role = "Engineer";
  const engineer = new Engineer("John", 1, "JohnSmith@gmail.com", "githubname");

  expect(engineer.getRole()).toBe(role);
});

test("get an Engineer id", () => {
  const github = "githubname";
  const engineer = new Engineer("John", 1, "JohnSmith@gmail.com", github);

  expect(engineer.getGithub()).toBe(github);
});

test("create an engineer object", () => {
  const engineer = new Engineer("John", 1, "JohnSmith@gmail.com", "github");

  expect(engineer.github).toEqual(expect.any(String));
});
