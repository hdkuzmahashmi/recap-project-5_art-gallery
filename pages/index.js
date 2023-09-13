import useSWR from "swr";

import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomArt = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
      />
    </div>
  );
}
