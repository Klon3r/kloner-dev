import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "production" ? "https://kloner.dev/" : "*";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

/**
 * Fetches games from the database filtered by completion year.
 */
export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const year = url.searchParams.get("year");

  if (!year) {
    return new Response(
      JSON.stringify({ error: "Year parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        },
      }
    );
  }

  const sql = `SELECT * FROM games WHERE completion_date LIKE ?`;
  const params = [`${year}-%`];

  const result = await client.execute(sql, params);

  return new Response(JSON.stringify({ body: result }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
};
