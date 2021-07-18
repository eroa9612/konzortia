import routerx from 'express-promise-router';
import clasificationController from '../controllers/ClasificationController';

const router = routerx();

router.post('/add', clasificationController.add);

router.get('/list', clasificationController.list);

router.get('/onlyclasification', clasificationController.onlyClasification);

router.put('/update', clasificationController.update);

router.delete('/delete', clasificationController.delete);

export default router;