import { Router } from 'express';
import { updateController } from '../controllers/updateController'; 

class  AreaRoutes{

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/recent-documents', updateController.getRecentDocuments);
    this.router.get('', updateController.getDocumentsWithStatusAlta);
  }
}

const updateRouter = new AreaRoutes();
export default updateRouter.router;
