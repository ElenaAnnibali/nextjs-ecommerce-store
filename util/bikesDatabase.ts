import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

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

export async function getBikes() {
  const bikes = await sql`
  SELECT * FROM bicycles
`;
  return bikes.map((bike) => camelcaseKeys(bike));
}

export async function getBike(id?: number) {
  if (!id) return undefined;
  const [bike] = await sql`
    SELECT * FROM bicycles
    WHERE id = ${id}
`;
  return camelcaseKeys(bike);
}
