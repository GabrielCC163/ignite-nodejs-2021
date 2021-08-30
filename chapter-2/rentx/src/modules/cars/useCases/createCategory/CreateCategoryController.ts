import { Request, Response } from 'express';

import { Category } from '../../entities/Category';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response<Category> {
    const { name, description } = req.body;

    const categoryCreated = this.createCategoryUseCase.execute({
      name,
      description,
    });

    return res.status(201).json(categoryCreated);
  }
}

export { CreateCategoryController };
