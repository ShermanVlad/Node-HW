import mongoose from "mongoose";

import { IToken } from "../interfaces/token.interface";
import { User } from "./user.model";

const { Schema } = mongoose;

const tokenSchema = new Schema<IToken>(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },

    _userId: { type: Schema.Types.ObjectId, required: true, ref: User },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// export const Token = mongoose.model<IToken>("tokens", tokenSchema);
export const Token = mongoose.model("tokens", tokenSchema);
