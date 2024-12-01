import { Client } from "pg";
import app from "./app";

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Database connected successfully");
  } catch (err: any) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || "8080";

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
