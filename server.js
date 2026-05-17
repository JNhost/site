const { existsSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

const envFilePath = join(process.cwd(), ".env.local");

if (existsSync(envFilePath)) {
  const envFile = readFileSync(envFilePath, "utf8");

  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);

    if (!match || process.env[match[1]]) {
      continue;
    }

    let value = match[2].trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[match[1]] = value;
  }
}

process.env.NEXT_DEPLOYMENT_TYPE ??= "standalone";
process.env.NODE_ENV ??= "production";
process.env.PORT ??= "7717";

require("./.next/standalone/server.js");
