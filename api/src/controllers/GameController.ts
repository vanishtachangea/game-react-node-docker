import { Request, Response, NextFunction } from 'express';
import { get, controller, use, bodyValidator, post } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('Request has been made');
    next();
}

@controller('/game')
class GameController {


    @get('/board')
    @use(logger)
    getBoard(req: Request, res: Response): void {
        res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
       `)
    }

    @post('/board')
    //@bodyValidator('email', 'password')
    postBoard(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email && password && email === 'hi@vc.com' && password === 'pw') {
            //req.session = { loggedIn: true };
            res.redirect('/');
        }
        else
            res.send("Invalid email or password");
    };

    @post('/play')
    //@bodyValidator('email', 'password')
    postPlay(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email && password && email === 'hi@vc.com' && password === 'pw') {
            //req.session = { loggedIn: true };
            res.redirect('/');
        }
        else
            res.send("Invalid email or password");
    };
}