/**
 * Validate environment variables before starting or building the application.
 * Set SKIP_ENV_VALIDATION=1 only for workflows that intentionally omit runtime configuration.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {};

export default config;

