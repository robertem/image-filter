import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';

const c = config.dev;

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    
    if (!req.headers || !req.headers.authorization){
        return res.status(401).send({ message: 'No authorization headers.' });
    }   

    const token_bearer = req.headers.authorization.split(' ');
    if(token_bearer.length != 2){
        return res.status(401).send({ message: 'Malformed token.' });
    }   
    const token = token_bearer[1];

    return jwt.verify(token, c.jwt_secret, (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
      }
      return next();
    });
}