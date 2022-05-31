import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

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
  SELECT * FROM bikes
`;
  return bikes.map((bike) => camelcaseKeys(bike));
}

export async function getbike(id) {
  const [bike] = await sql`
    SELECT * FROM bikes
    WHERE id = ${id}
`;
  return camelcaseKeys(bike);
}
