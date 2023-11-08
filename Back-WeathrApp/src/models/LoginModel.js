const mongoose = require("mongoose");
const validator = require("validator");
const LoginSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
});
const LoginModel = mongoose.model("Login", LoginSchema);
class Login {
  constructor(body) {
    this.body = body;
    this.user = null;
  }
  async register() {
    this.cleanUp();
    this.user = await LoginModel.create(this.body);
  }
  async delete(id) {
    await LoginModel.findByIdAndDelete(id);
    return;
  }
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      nome: this.body.nome,
      email: this.body.email,
      senha: this.body.senha,
    };
  }
}
module.exports = Login;
