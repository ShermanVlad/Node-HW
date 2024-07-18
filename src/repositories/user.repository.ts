import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await User.find();
  }

  public async create(dto: IUser): Promise<IUser> {
    return await User.create(dto);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  // public async updateById(userId: string, dto: IUser): Promise<any> {
  //   // const users = await fsService.read();
  //   // const user = users.find((user) => user.id === userId);
  //   //
  //   // if (!user) {
  //   //   throw new ApiError("User not found", 422);
  //   // }
  //   //
  //   // if (dto.password) user.password = dto.password;
  //   // if (dto.name) user.name = dto.name;
  //   // if (dto.email) user.email = dto.email;
  //   //
  //   // await fsService.write(users);
  //   // return user;
  // }

  // public async deleteById(userId: number): Promise<void> {
  //   //   const users = await fsService.read();
  //   //   const userIndex = users.findIndex((user) => user.id === userId);
  //   //
  //   //   if (userIndex === -1) {
  //   //     throw new ApiError("User not found", 422);
  //   //   }
  //   //
  //   //   users.splice(userIndex, 1);
  //   //   await fsService.write(users);
  // }
}

export const userRepository = new UserRepository();
