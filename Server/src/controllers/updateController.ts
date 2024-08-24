import { Request, Response } from 'express';
import pool from '../database'; 
class UpdateController {

    public async getRecentDocuments(req: Request, res: Response): Promise<void> {
        const tables = ['areas', 'usuarios', 'formatos', 'its', 'instrucciones_formatos', 'procedimientos', 'procedimientos_formatos', 'procedimientos_instrucciones'];
        const results: any = {};
    
        try {
            for (const table of tables) {
                const query = `SELECT * FROM ${table} WHERE updated_at >= NOW() - INTERVAL 10 MINUTE`;
                const data = await pool.query(query);
                results[table] = data;
            }
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching recent documents', error });
        }
    }

    public async getDocumentsWithStatusAlta(req: Request, res: Response): Promise<void> {
    const tables = [ 'formatos', 'its',  'procedimientos'];
    const results: any = {};

    try {
        for (const table of tables) {
            // Ajustar la consulta SQL para incluir una condición de status 'alta'
            const query = `SELECT * FROM ${table} WHERE status = 'alta'`;
            const data = await pool.query(query);
            results[table] = data;
        }
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching documents with status alta', error });
    }
}




}

export const updateController = new UpdateController();