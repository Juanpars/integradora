import { Router } from 'express';
import { areaController } from '../controllers/areaControllers'; 

class  AreaRoutes{

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', areaController.list); 
    this.router.get('/:id', areaController.getOne);
    this.router.post('/', areaController.create);
    this.router.put('/:id', areaController.update);
    this.router.delete('/:id', areaController.delete);
  }
}

const areaRoutes = new AreaRoutes();
export default areaRoutes.router;
