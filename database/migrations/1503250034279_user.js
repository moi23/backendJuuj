"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("nome", 254).notNullable();
      table.string("cpf", 20).notNullable();
      table.string("email", 50).notNullable();
      table.string("telefone", 20).notNullable();
      table.string("celular", 20).notNullable();
      table.string("nascimento", 8).notNullable();
      table.string("sexo", 1).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
