import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

// SOLID - D => DIP => Dependency Inversion Principle
// service call repository

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!');
    }

    const createdCategory = await this.categoriesRepository.create({
      name,
      description,
    });

    return createdCategory;
  }
}

export { CreateCategoryUseCase };
