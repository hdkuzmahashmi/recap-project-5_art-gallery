import useSWR from "swr";

import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (!data) {
    return null;
  }

  console.log("data: ", data);
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
