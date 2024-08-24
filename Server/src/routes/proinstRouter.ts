import { Router } from 'express';
import { procedimientos_instruccionesController } from '../controllers/proinstController'; 
import multer from 'multer';

class Procedimientos_instruccionesRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    // Configure Multer inside the config method
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Specify your uploads directory
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);  // Customize the filename
      }
    });

    const upload = multer({ storage });

    // Define routes and use the Multer middleware where necessary
    this.router.get('/', procedimientos_instruccionesController.list); 
    this.router.get('/:id', procedimientos_instruccionesController.getOne);
    this.router.post('/', procedimientos_instruccionesController.create);
    this.router.put('/:id', procedimientos_instruccionesController.update);
    this.router.delete('/:id', procedimientos_instruccionesController.delete);
  }
}

const procedimientos_instruccionesRoutes = new Procedimientos_instruccionesRoutes();
export default procedimientos_instruccionesRoutes.router;
