import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository(); // could be postgres repo

// SOLID - S => SRP => Single Responsability Principle
// every function must have a single responsability
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const categoryCreated = createCategoryService.execute({ name, description });

  return res.status(201).json(categoryCreated);
});

categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };
