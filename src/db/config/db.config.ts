import { Dialect } from "sequelize";

export const dbConfig: {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DIALECT: Dialect;
  DB: string;
  PORT: number;
  DEFAULT_OFFSET: number;
  DEFAULT_LIMIT: number;
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
  DEFAULT_OFFSET: 0,
  DEFAULT_LIMIT: 20,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
