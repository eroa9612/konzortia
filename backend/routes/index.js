import routerx from 'express-promise-router';
import clasificationRouter from './clasification';
import movieRouter from './movies';

const router= routerx();

router.use('/movie', movieRouter);
router.use('/clasification', clasificationRouter);

export default router;