import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    // Real-world application ekak nm user ID or IP address use karanna
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }
    next();
  } catch (error) {
    console.log("Rate limiter error:", error);
    next(error);
  }
}
export default ratelimiter;