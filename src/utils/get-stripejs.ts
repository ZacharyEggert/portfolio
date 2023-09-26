/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from '@stripe/stripe-js';

import { env } from '../env.mjs';

let stripePromise: Promise<Stripe | null>;

export default function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) stripePromise = loadStripe(env.STRIPE_PK);

  return stripePromise;
}
