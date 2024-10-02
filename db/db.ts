import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

export const client = postgres(connectionString!, { prepare: false });
console.log("Connected to database");
export const db = drizzle(client);
