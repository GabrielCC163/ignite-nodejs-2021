import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '../../entities/User';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const { name, username, email, password, driver_licence } = req.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const createdUser = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      driver_licence,
    });

    return res.status(201).json(createdUser);
  }
}

export { CreateUserController };
