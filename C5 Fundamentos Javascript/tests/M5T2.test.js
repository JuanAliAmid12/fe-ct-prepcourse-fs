const nuevoNumero = require("../ejercicios/02");

test(14, function () {
  expect(typeof nuevoNumero).toBe("number");
expect(nuevoNumero).toBe(14);
});