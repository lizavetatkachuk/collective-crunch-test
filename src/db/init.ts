import { Forest } from "./models/Forest";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  Forest.sync({ alter: isDev });
};
export default dbInit;
