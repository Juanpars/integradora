import { Router } from 'express';
import { itsController } from '../controllers/itsController'; 

class ItsRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', itsController.list); 
    this.router.get('/:id', itsController.getOne);
    this.router.post('/', itsController.create);
    this.router.put('/:id', itsController.update);
    this.router.delete('/:id', itsController.delete);
  }
}

const itsRoutes = new ItsRoutes();
export default itsRoutes.router;
