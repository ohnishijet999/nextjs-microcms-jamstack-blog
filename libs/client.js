import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '106fy100rl',
  apiKey: process.env.API_KEY,
});