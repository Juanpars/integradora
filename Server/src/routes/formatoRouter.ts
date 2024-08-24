import { Router } from 'express';
import { formatoController } from '../controllers/formatoController'; 

class FormatoRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', formatoController.list); 
    this.router.get('/:id', formatoController.getOne);
    this.router.post('/', formatoController.create);
    this.router.put('/:id', formatoController.update);
    this.router.delete('/:id', formatoController.delete);
  }
}

const formatoRoutes = new FormatoRoutes();
export default formatoRoutes.router;
