import express from "express";
import route from "./routes";

export const app = express();
function Server() {
  try {
    const PORT = process.env.PORT || 5000;

    //bodyparser setup
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use("/api", route);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
}

Server();
