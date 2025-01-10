// lib/jwt.ts

import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function signToken(payload: object): string {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token: string): object | null {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === "string") {//?????
      return null;
    }
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}
