import express from 'express';
import { router } from './router';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  router(app);
});
