import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  //const router = useRouter();
  const [artPiecesInfo, setartPiecesInfo] = useState([]);
  const [slug, setSlug] = useState("");

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    console.log("slug", slug);
    setSlug(slug);
    setartPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      console.log("infoooooooooo", info);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !isFavorite } : info
        );
      }

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });

    console.log("artPiecesInfoooooo", artPiecesInfo);
  }
  //const querslug = router.query;
  console.log("after function query slug", slug);

  console.log("after function artPiecesInfo", artPiecesInfo);
  const artinfo = artPiecesInfo.find((info) => info.slug === slug) ?? {
    isFavorite: false,
  };

  const { isFavorite } = artinfo;
  console.log("artinfo", artinfo);
  return (
    <SWRConfig>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        isFavorite={isFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </SWRConfig>
  );
}
