const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor } = require("./../../app");

/** GIVEN */

Given('um doutor de nome {string}', function (string) {
    doutor.name = string;
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    doutor.food = int;
});

Given('ele sempre começa a viagem saudável.', function () {
    doutor.isHealthy = true;
});

/** WHEN */

When('o doutor sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        doutor.hunt();
    }
});

When('o doutor parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        doutor.eat();
    }
});

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(doutor.food, int);
});

Then('o doutor não ficará doente', function () {
    assert.strictEqual(doutor.isHealthy, true)
});

Then('o doutor ficará doente', function () {
    assert.strictEqual(doutor.isHealthy, false)
});