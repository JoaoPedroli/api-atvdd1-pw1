import express from 'express';
import { userRouter } from './router/User';
import { technologyRouter } from './router/Technology';
import { checkExistsUserAccount } from './middlewares/index';

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/technologies", checkExistsUserAccount);
app.use("/technologies", technologyRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.info("Aplicação rodando na porta 3000!");
});
