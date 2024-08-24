import { Request, Response } from 'express';
import pool from '../database'; 
import { unlink } from 'fs';
class Procedimientos_instruccionesController {

    public async  list (req: Request, res: Response): Promise<void>{
        const act = await pool.query('SELECT * FROM procedimientos_instrucciones ')
          res.json(act);
       }

       public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM procedimientos_instrucciones WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }
    
    public async create(req: Request, res: Response): Promise<void>{
      await pool.query('INSERT INTO procedimientos_instrucciones set ? ',[req.body])
      res.json({message:'formato Guardada'});
    }

    public async update(req: Request, res: Response): Promise<void>{
      const {id} = req.params;
      await pool.query('UPDATE procedimientos_instrucciones set ?  WHERE id = ?',[req.body,id]);
      res.json({message: 'La actividad se actualizo'});
    }

  public async delete(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    await pool.query('DELETE FROM procedimientos_instrucciones WHERE id = ?',[id]);
    res.json({message: 'La actividad se Elimino'});
  }

}

export const procedimientos_instruccionesController = new Procedimientos_instruccionesController();
