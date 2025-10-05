import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

// Configure connection with optimizations
const sql = neon(process.env.NEON_DATABASE_URL!, {
  // Enable connection pooling
  arrayMode: false,
  fullResults: false,
});

export const db = drizzle(sql, {
  // Enable query logging in development
  logger: process.env.NODE_ENV === 'development',
});
