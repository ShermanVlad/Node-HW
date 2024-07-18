import { RoleEnum } from "../enums/role.enum";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  age: number;
  phone?: string;
  role: RoleEnum;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
