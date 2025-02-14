// pages/_app.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

export default MyApp;
