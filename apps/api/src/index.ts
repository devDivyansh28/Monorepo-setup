import express from 'express';

import {createUserSchema} from "@monorepo/utils";

import cors from "cors"


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({message : "Hello world!!!"});
});

app.post('/users',  (req, res) => {
  const result = createUserSchema.safeParse(req.body);

  if(!result.success) {
    const message =  result.error.issues.map(issue => issue.message).join(", ");

   return res.status(400).json({
    success:false,
    error: message});
  }

  console.log(result.data);

  return res.json({
    success:true,
    message:"User Created Successfully"
  })

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
