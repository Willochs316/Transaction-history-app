const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
const app = express();
const cors = require('cors');

// create array of dates
// ensure there are repeating dates
const dates = [
  '2022-10-03T12:24:02.414Z',
  '2022-07-14T00:04:43.309Z',
  '2023-04-18T06:11:28.119Z',
  '2022-07-13T23:42:17.940Z',
  '2022-08-14T02:12:32.706Z',
  '2022-07-14T12:24:52.316Z',
  '2022-08-29T11:50:04.829Z',
];

const transactionTypes = ['cash', 'card'];

// data
const transactions = Array(20)
  .fill(0)
  .map(() => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    amount: faker.finance.amount(10, 80, 2),
    date: dates
      .sort(() => Math.random() - Math.random())
      .slice(0, dates.length)[0],
    sucess: Math.random() < 0.8,
    transactionType: transactionTypes[Math.floor(Math.random(1, 2) * 2)],
  }));

console.log(transactions, 'RO:');

// schema
const schema = buildSchema(`
type Query {
    transaction(id: String!): Transaction
    transactions: [Transaction]
  }
  type Transaction {
    name: String
    amount: String
    date: String
    sucess: Boolean
    transactionType: String,
  }
`);

const root = {
  transaction: (id) => transactions.filter((transact) => transact.id === id),
  transactions: () => transactions,
};

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const port = 4000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
