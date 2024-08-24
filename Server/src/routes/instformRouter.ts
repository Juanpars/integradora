import { Router } from 'express';
import { instrucciones_formatosController } from '../controllers/instformController'; 

class Instrucciones_formatosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', instrucciones_formatosController.list); 
    this.router.get('/:id', instrucciones_formatosController.getOne);
    this.router.post('/', instrucciones_formatosController.create);
    this.router.put('/:id', instrucciones_formatosController.update);
    this.router.delete('/:id', instrucciones_formatosController.delete);
  }
}

const instrucciones_formatosRoutes = new Instrucciones_formatosRoutes();
export default instrucciones_formatosRoutes.router;
