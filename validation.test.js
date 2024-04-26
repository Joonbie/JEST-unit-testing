// import { isEmpty, isEmail } from "./validation.js";
const { isEmpty, isEmail } = require("./validation.js");

// Test case 1: tets isEmpty to return true
test("should return trye when empty", () => {
  expect(isEmpty("")).toBeTruthy();
});

// Test case 2: tests isEmpty to return false if the parameter is not empty
test("should return false when NOT empty", () => {
  expect(isEmpty("John")).toBeFalsy();
});

// Test case 3: tests isEmail to return true if parameter passed in is a valid email
test("should return true when valid email", () => {
  const result = isEmail("johndoe@email.com");
  expect(result).toBe(true);
});

// Test case 4: tests isEmail to return false if parameter passed in is an INVALID email
test("should return false when INVALID email", () => {
  const result = isEmail("johndoe");
  ("");
  expect(result).toBe(false);
});

// Test case 5: write an array to run a series of values to test against a fumctfeatiremec
test.each([
  { name: "", expected: true },
  { name: "John", expected: false },
])(".isEmpty($name", ({ name, expected }) => {
  expect(isEmpty(name)).toBe(expected);
});

// Test case 6: write an array to run a series of vales to test against isEmail
test.each([
  { email: "", expected: false },
  { email: "johndoe", expected: false },
  { email: "johndoe@gmail", expected: false },
  { email: "johndoe@gmail.com", expected: true },
])(".isEmail($email", ({ email, expected }) => {
  expect(isEmail(email)).toBe(expected);
});
