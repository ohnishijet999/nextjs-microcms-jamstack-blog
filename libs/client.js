import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '106fy100rl',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.API_KEY,
});