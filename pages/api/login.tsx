// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

import { signToken } from "../../lib/jwt";

async function authenticateUser(email: string, password: string) {
  let db = null;

  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "userdata.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  const user = await db.get(sql, email, password);
  return user;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = await authenticateUser(email, password);
    if (user) {
      const token = signToken({ email: user.email });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
