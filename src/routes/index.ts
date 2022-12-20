import { Router } from 'express';
const router = Router();

import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

// Controllers Page
router.get('/', PageController.home)
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

router.get('/search', SearchController.search)



export default router;