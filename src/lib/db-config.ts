import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// Ensure the database URL is properly formatted
const databaseUrl = process.env.NEON_DATABASE_URL;

if (!databaseUrl) {
  throw new Error('NEON_DATABASE_URL environment variable is not set');
}

// Configure connection with optimizations
const sql = neon(databaseUrl, {
  // Enable connection pooling
  arrayMode: false,
  fullResults: false,
});

export const db = drizzle(sql, {
  // Enable query logging in development
  logger: process.env.NODE_ENV === 'development',
});
