let nuevoString = require('../ejercicios/01');

test("hola mundo", function () {
  expect(typeof nuevoString).toBe("string");
expect(nuevoString).toBe("hola mundo");
});

