const nuevoBoolean = require("../ejercicios/03");

test("nuevoBoolean debe ser false", function () {
  expect(typeof nuevoBoolean).toBe("boolean");
  expect(nuevoBoolean).toBe(false)
});