"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.only([
      "nome",
      "cpf",
      "email",
      "telefone",
      "celular",
      "nascimento",
      "sexo",
    ]);

    const user = await User.create(data);

    return user;
  }

  async listAll({ response }) {
    const users = await User.all();

    return response.json(users);
  }

  async listOne({ response }) {
    const user = await User.find(1);
  }
}

module.exports = AuthController;
