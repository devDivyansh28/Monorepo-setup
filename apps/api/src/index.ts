import express from 'express';

import {createUserSchema} from "@monorepo/utils";

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({message : "Hello world!!!"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});