import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response<User> {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(user);
    } catch (error) {
      return response.status(404).json({
        error: "User not found",
      });
    }
  }
}

export { TurnUserAdminController };