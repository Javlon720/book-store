import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from "url"


const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({ path: path.join(__dirname,"../../.env") })

export const config = {
api_port:process.env.API_PORT,
web_port:process.env.WEB_PORT,
pg_host:process.env.PG_HOST,
pg_port:process.env.PG_PORT,
pg_user:process.env.PG_USER,
pg_password:process.env.PG_PASSWORD,
pg_database:process.env.PG_DATABASE,
}