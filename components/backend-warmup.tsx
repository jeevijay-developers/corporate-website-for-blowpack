"use client";

import { useEffect } from "react";

// Fires once on mount to wake backend via the /health endpoint.
export function BackendWarmup() {
  useEffect(() => {
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
      "http://localhost:5000";
    const healthUrl = `${backendUrl}/health`;

    console.log("Warming up backend at:", healthUrl);

    // Intentionally fire-and-forget; no need to await or handle response.
    fetch(healthUrl)
      .then(() => console.log("Backend warmup successful"))
      .catch((err) => console.warn("Backend warmup failed:", err));
  }, []);

  return null;
}
