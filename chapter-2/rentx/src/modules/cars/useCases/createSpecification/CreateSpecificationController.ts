import { Request, Response } from 'express';

import { Specification } from '../../entities/Specification';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response<Specification> {
    const { name, description } = req.body;

    const createdSpecification = this.createSpecificationUseCase.execute({
      name,
      description,
    });

    return res.status(201).json(createdSpecification);
  }
}

export { CreateSpecificationController };
