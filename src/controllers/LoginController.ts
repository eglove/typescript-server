import { Request, Response } from 'express';
import { get, post } from './decorators/routes';
import { controller } from './decorators/controller';
import { bodyValidator } from './decorators/bodyValidator';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hello@ethang.email' && password === '7N8CZ5YT3zfSW!') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password.');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
