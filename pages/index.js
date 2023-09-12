import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (!data) {
    return null;
  }

  // const { name, imageSource, artist } = data;
  // console.log("imageSource", imageSource);
  return (
    <div>
      <h1>Art Gallery</h1>
      <ul>
        {data.map((art) => {
          return (
            <li key={art.slug}>
              HelloThere
              <Image
                width={art.dimensions.width}
                height={art.dimensions.height}
                alt={art.name}
                src={art.imageSource}
              />
              <small>{`"${art.name}" by ${art.artist}`}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
