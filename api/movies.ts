import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "production" ? "https://kloner.dev" : "*";

const client = createClient({
  url: process.env.KLONER_TURSO_DATABASE_URL ?? "",
  authToken: process.env.KLONER_TURSO_AUTH_TOKEN,
});

/**
 * GET: Fetches a list of movies from the database
 */
export const GET = async () => {
  const sql = `SELECT * FROM movies ORDER BY movie_title`;

  const result = await client.execute(sql);

  return new Response(JSON.stringify({ body: result }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
};
