import { Suspense } from "react";
import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <UserAgentProvider>
            <Layout>{children}</Layout>
          </UserAgentProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
