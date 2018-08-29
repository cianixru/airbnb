import * as Redis from 'ioredis'

export const redis =
  process.env.NODE_ENV === 'production'
    ? new Redis(process.env.REDISTOGO_URL)
    : new Redis()
