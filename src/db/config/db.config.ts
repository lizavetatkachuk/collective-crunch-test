import { Dialect } from "sequelize";

export const dbConfig: {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DIALECT: Dialect;
  DB: string;
  PORT: number;
  pool: {
    min: number;
    max: number;
    acquire: number;
    idle: number;
  };
} = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postpass",
  DB: "forest_db",
  PORT: 5432,
  DIALECT: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
