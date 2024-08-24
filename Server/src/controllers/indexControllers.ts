import {Request, Response} from 'express';
 class IndexController{
    index (req: Request, res: Response){
       res.json({Text: 'API Is /api/AjedrezWeb'});
    }
    
 }
 export const indexController = new IndexController();