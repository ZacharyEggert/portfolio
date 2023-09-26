import 'server-only';

import Stripe from 'stripe';
import { env } from '@/env.mjs';

export const stripe = new Stripe(env.STRIPE_SK, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2023-08-16',
  appInfo: {
    name: "Zach's Next.js with Stripe Demo",
    url: 'https://www.zacharyeggert.com/',
  },
});
