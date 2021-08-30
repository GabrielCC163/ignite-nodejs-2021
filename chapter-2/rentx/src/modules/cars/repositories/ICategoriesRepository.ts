import { Category } from '../entities/Category';

// DTO - Data Transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// SOLID - L => LSP => Liskov Substitution Principle
// ICategoriesRepository (every repository can implement this)
interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
