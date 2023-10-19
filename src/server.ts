import express from "express";
import { checkExistsUserAccount } from "./middlewares/index";
import { technologyRouter } from "./router/Technology";
import { userRouter } from "./router/User";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/technologies", checkExistsUserAccount);
app.use("/technologies", technologyRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.info("Aplicação rodando na porta 3000!");
});
