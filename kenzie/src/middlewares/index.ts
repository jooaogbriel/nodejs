import { NextFunction, Request, Response } from "express";
import clients from "../database";
import { Client } from "../interfaces";

const verifyClientExists = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const client: Client | undefined = clients.find(
    (client) => client.email === req.body.email
  );

  if (!client) {
    return res.status(404).json({ message: "Client not found." });
  }

  req.client = client;

  return next();
};

export { verifyClientExists };