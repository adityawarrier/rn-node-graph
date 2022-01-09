import Pino from "pino";

const Logger = Pino({
  prettyPrint: true,
  base: undefined,
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
});

export { Logger };
