const Login = require("../models/LoginModel");
exports.register = async function (req, res) {
    res.send('AAAAAAAAAAAA')
  try {

    const login = new Login(req.body);
    await login.register();
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/WeatherApp/WeatherAppPast/cadastro.html?#');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log('aqui chegou')
  } catch (e) {
    console.log(e);
  }
};
