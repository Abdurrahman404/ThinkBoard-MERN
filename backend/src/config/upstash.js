import { Ratelimit } from "@upstash/ratelimit"; 
import { Redis } from "@upstash/redis"; 
import dotenv from "dotenv";

dotenv.config();

// Create a Redis client from environment variables
const redis = Redis.fromEnv();

// Create a new rate limiter: 10 requests per 20 seconds
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "60 s"), // 100 requests per 60 seconds
  analytics: true, // optional: enables analytics in Upstash dashboard
});

export default ratelimit;
