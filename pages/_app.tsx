import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ApplicationContainer } from "../components/ApplicationContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <ApplicationContainer>
        <Component {...pageProps} />
      </ApplicationContainer>
    </MantineProvider>
  );
}

export default MyApp;
