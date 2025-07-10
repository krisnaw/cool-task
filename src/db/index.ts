import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/singlestore";

const client = createClient({ url: "DATABASE_URL" });

const db = drizzle(client);

export default db;
