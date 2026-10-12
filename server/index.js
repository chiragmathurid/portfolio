import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const dataPath = resolve("server/data/portfolio.json");
const port = globalThis.process?.env.PORT || 8787;
const server = createServer(async (request, response) => {
  if (request.url !== "/api/portfolio") {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  try {
    const portfolio = await readFile(dataPath, "utf8");
    response.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-cache" });
    response.end(portfolio);
  } catch {
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Portfolio content is unavailable" }));
  }
});

server.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`);
});
