import { createClient } from "@libsql/client";

const ALLOWED_ORIGIN =
  process.env.NODE_ENV === "PROD" ? "https://kloner.dev/" : "*";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const GET = async () => {
  const result = await client.execute("SELECT * FROM games");

  return new Response(JSON.stringify({ body: result }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
};
