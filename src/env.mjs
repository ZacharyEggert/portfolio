import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const rawEnv = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    STRIPE_SK_test: process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1),
    STRIPE_SK_live: process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PK_test: process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1),
    NEXT_PUBLIC_STRIPE_PK_live:
      process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_STRIPE_PK_test: process.env.NEXT_PUBLIC_STRIPE_PK_test,
    NEXT_PUBLIC_STRIPE_PK_live: process.env.NEXT_PUBLIC_STRIPE_PK_live,
    STRIPE_SK_test: process.env.STRIPE_SK_test,
    STRIPE_SK_live: process.env.STRIPE_SK_live,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

/** @type {{STRIPE_SK:string;STRIPE_PK:string}} */
export const env = {
  STRIPE_SK: process.env.NODE_ENV === 'production' ? rawEnv.STRIPE_SK_live : rawEnv.STRIPE_SK_test,
  STRIPE_PK:
    process.env.NODE_ENV === 'production' ? rawEnv.NEXT_PUBLIC_STRIPE_PK_live : rawEnv.NEXT_PUBLIC_STRIPE_PK_test,
};
