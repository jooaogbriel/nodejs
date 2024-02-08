// src/@types/express/index.d.ts
import { Client } from "../../interfaces";

declare global {
  namespace Express {
    interface Request {
      client: Client;
    }
  }
}