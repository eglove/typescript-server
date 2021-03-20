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
    if (email &&
        password &&
        email === 'hello@ethang.email' &&
        password === '7N8CZ5YT3zfSW!') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password.');
    }
});
exports.router.get('/', (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
      <div>
        <div>You are logged in.</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <div>You are not logged in.</div>
        <a href='/login'>Login</a>
      </div>
    `);
    }
});
exports.router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
