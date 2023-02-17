import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handler(req: Request): Response {
  const url = new URL(req.url);
  const path = url.pathname;
  try {
    const content = await Deno.readTextFile(`.${path}`);
    return new Response(content, {
      headers: { "content-type": "application/javascript" },
    });
  } catch {
    return new Response(`${path} Not found`, { status: 404 });
  }
}

serve(handler);
