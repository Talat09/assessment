// userAgent.tsx
"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { useEffect } from "react";

export const UserAgent = () => {
  const { userAgent, setUserAgent } = useUserAgentContext();

  useEffect(() => {
    // Only update if we're in the browser and the userAgent is different
    if (
      typeof window !== "undefined" &&
      window.navigator.userAgent !== userAgent
    ) {
      setUserAgent(window.navigator.userAgent);
    }
  }, [setUserAgent, userAgent]);

  return (
    <div>
      <BackToHome />
      {userAgent ? (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      ) : (
        <div>No user agent</div>
      )}
    </div>
  );
};
