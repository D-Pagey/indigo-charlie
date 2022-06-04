// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  const isValidUsername = username === "incard";
  const isValidPassword = password === "incard";

  if (isValidUsername && isValidPassword) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(401).json({ error: "Incorrect username or password" });
  }
}
