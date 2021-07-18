import routerx from 'express-promise-router';
import movieController from '../controllers/MovieController';

const router = routerx();

router.post('/add', movieController.add);

router.get('/list', movieController.list);

router.get('/onlymovie', movieController.onlyMovie);

router.put('/update', movieController.update);

router.delete('/delete', movieController.delete);

export default router;