import { schema } from './prisma/schema';
import express from "express";
import { PrismaClient} from '@prisma/client';
import {createContext} from './prisma/context';
import { ApolloServer} from 'apollo-server';
const app = express();
const port = 9997;
const prisma = new PrismaClient();
const server = new ApolloServer({ schema, context: createContext });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api`)
})
const afun = (a: any) => {
  
}
app.get("/create", async (req: any, res: any) => {
  await prisma.company.create({
    data: {
      id: 17,
      name: 'chunyi2',
      age: 24,
      address: 'liuzhou',
      salary: 1000000,
      join_date: new Date(),
    }
  })
  res.send({code: 200, message: 'create successfully'})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
