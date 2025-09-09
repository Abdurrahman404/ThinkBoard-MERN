import ratelimit from "../config/upstash.js"; // ensure extension if using ES modules

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP (or user ID / API key if available)
    const { success, limit, remaining, reset } = await ratelimit.limit("my unique_key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
        limit,
        remaining,
        reset, // unix timestamp when limit resets
      });
    }

    // Optional: set rate limit headers so clients know limits
    res.setHeader("X-RateLimit-Limit", limit);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", reset);

    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    // Fail-open: allow request if rate limiter fails
    next();
  }
};

export default rateLimiter;
