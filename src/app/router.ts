import { Request, Express, Response, NextFunction } from 'express';

export const router = (app: Express) => {
  app.get('/ping', (req: Request, res: Response) => {
    return res.status(200).send({
      msg: 'Pong',
    });
  });
};
