import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

export type DatabaseType = {
  name: string;
  type: string;
  status: string;
  id: number;
  price: string;
  inStockQuantity: string;
};

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

type Product = {
  id: number;
  type: string;
  status: string;
  price: string;
  inStockQuantity: string;
};

export async function getBikes() {
  let bikes: Product[] | undefined = [];
  try {
    bikes = await sql<Product[]>`
    SELECT * FROM bicycles
  `;
  } catch (error) {
    console.log(error);
  }
  return bikes.map((bike) => camelcaseKeys(bike));
}

export async function getBike(id: number | undefined) {
  if (!id) return undefined;
  const [bike] = await sql<[Product | undefined]>`
    SELECT * FROM bicycles
    WHERE id = ${id}
`;
  return bike && camelcaseKeys(bike);
}
