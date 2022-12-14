import * as dotenv from "dotenv";

dotenv.config();

export const config: {
  port: number;
} = {
  port: Number(process.env.PORT) ?? 8080
};