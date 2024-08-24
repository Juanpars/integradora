import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

import indexRoutes from './routes/indexRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import AreaRoutes from './routes/areaRouter';
import FormatoRoutes from './routes/formatoRouter';
import Instrucciones_formatosRoutes from './routes/instformRouter';
import ItsRoutes from './routes/itsRouter';
import ProcedimientosRoutes from './routes/ProcedimientosRouter';
import Procedimientos_formatosRoutes from './routes/proceformRouter';
import Procedimientos_instruccionesRoutes from './routes/proinstRouter';
import loginRoutes from './routes/loginRoutes';
import updateRouter from './routes/UpdateRouter';

class Server {
    public app: Application;
    public upload: multer.Multer;

    constructor() {
        this.app = express();
        
        // Initialize multer with original file name
        this.upload = multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path.join(__dirname, '/uploads')); // Store in uploads folder
                },
                filename: (req, file, cb) => {
                    // Use only the original file name, avoiding prefixes
                    cb(null, file.originalname);
                }
            }),
            limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB
        });
        
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        // Serve uploaded files statically
        this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/user', usuarioRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/area', AreaRoutes);
        this.app.use('/api/formato', FormatoRoutes);
        this.app.use('/api/Instrucciones_formatos', Instrucciones_formatosRoutes);
        this.app.use('/api/its', ItsRoutes);
        this.app.use('/api/procedimientos', ProcedimientosRoutes);
        this.app.use('/api/Procedimientos_formatos', Procedimientos_formatosRoutes);
        this.app.use('/api/Procedimientos_instrucciones', Procedimientos_instruccionesRoutes);
        this.app.use('/api/update', updateRouter);
        // Archivo: src/server.ts
        this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

        // File upload route
        this.app.post('/api/upload', this.upload.single('documento'), (req: Request, res: Response) => {
            if (req.file) {
                const fileName = req.file.originalname; // Use the original name
                // Now you can save the fileName to your database
                res.json({ message: 'File uploaded successfully!', fileName: fileName });
            } else {
                res.status(400).json({ message: 'No file uploaded' });
            }
        });

        // Serve uploaded files by filename
        this.app.get('/uploads/:filename', (req: Request, res: Response) => {
            const fileName = req.params.filename;
            const filePath = path.join(__dirname, 'uploads', fileName);

            res.sendFile(filePath, err => {
                if (err) {
                    res.status(404).send('Archivo no encontrado');
                }
            });
        });
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port", this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
