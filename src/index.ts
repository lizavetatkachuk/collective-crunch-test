import express, { Express,Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

var corsOptions = {
  origin: `http://localhost:${port}`,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
