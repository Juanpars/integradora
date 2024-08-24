import { Router } from 'express';
import { procedimientos_formatosController } from '../controllers/proceformController'; 

class Procedimientos_formatosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', procedimientos_formatosController.list); 
    this.router.get('/:id', procedimientos_formatosController.getOne);
    this.router.post('/', procedimientos_formatosController.create);
    this.router.put('/:id', procedimientos_formatosController.update);
    this.router.delete('/:id', procedimientos_formatosController.delete);
  }
}

const procedimientos_formatosRoutes = new Procedimientos_formatosRoutes();
export default procedimientos_formatosRoutes.router;
