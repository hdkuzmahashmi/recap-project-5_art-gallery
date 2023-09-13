import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <SWRConfig>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      <Layout />
    </SWRConfig>
  );
}
