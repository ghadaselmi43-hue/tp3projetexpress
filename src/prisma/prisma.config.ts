import "dotenv/config";
import { defineConfig, env } from "prisma/config";

const databaseUrl = new URL(env("DATABASE_URL"));
const shadowDatabaseUrl = new URL("/sangconnect_shadow", databaseUrl).toString();

export default defineConfig({
  schema: "schema.prisma",
  migrations: {
    path: "migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
    shadowDatabaseUrl,
  },
});
