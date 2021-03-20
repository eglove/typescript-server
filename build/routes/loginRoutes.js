"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/login', (req, res) => {
    res.send(`
    <form method="POST">
      <div>
        <label for='email'>Email</label>
        <input type='email' name='email'/>
      </div>
      <div>
        <label for='password'>Password</label>
        <input type='password' name='password'>
      </div>
      <button>Submit</button>
    </form>
  `);
});
exports.router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(email + password);
});
