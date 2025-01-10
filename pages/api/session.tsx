// pages/api/session.ts

import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../../lib/jwt";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.headers;

  if (typeof token !== "string") {
    return res.status(400).json({ message: "Token is required" });
  }

  const session = verifyToken(token);

  if (session) {
    res.status(200).json({ session });
  } else {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
