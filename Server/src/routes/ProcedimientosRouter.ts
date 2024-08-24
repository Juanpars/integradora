import { Router } from 'express';
import { procedimientosController } from '../controllers/procedimientosController'; 

class ProcedimientosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', procedimientosController.list); 
    this.router.get('/:id', procedimientosController.getOne);
    this.router.post('/', procedimientosController.create);
    this.router.put('/:id', procedimientosController.update);
    this.router.delete('/:id', procedimientosController.delete);
  }
}

const procedimientosRoutes = new ProcedimientosRoutes();
export default procedimientosRoutes.router;
