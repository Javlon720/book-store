import dotenv from "dotenv";
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootEnv = path.join(process.cwd(), ".env")
const repoEnv = path.join(__dirname, "../../.env")
const envPath = fs.existsSync(rootEnv) ? rootEnv : repoEnv

dotenv.config({ path: envPath })

export const config = {
  api_port: process.env.API_PORT,
  web_port: process.env.WEB_PORT,
  pg_host: process.env.PG_HOST,
  pg_port: process.env.PG_PORT,
  pg_user: process.env.PG_USER,
  pg_password: process.env.PG_PASSWORD,
  pg_database: process.env.PG_DATABASE,
}