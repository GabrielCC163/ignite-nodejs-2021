import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_licence,
  }: ICreateUserDTO): Promise<User> {
    const createdUser = await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_licence,
    });

    return createdUser;
  }
}

export { CreateUserUseCase };
