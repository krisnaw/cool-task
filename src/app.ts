import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import notFound from "stoker/middlewares/not-found";
import onError from "stoker/middlewares/on-error";
import serveEmojiFavicon from "stoker/middlewares/serve-emoji-favicon";

import { pinoLoggers } from "./middlewares/pino-loggers";

expand(config());

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();
app.use(serveEmojiFavicon("📝"));
app.use(pinoLoggers());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("hello");
  throw new Error("Oh no");
});

app.notFound(notFound);
app.onError(onError);

export default app;
