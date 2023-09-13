import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  const randomArt = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
      />
    </div>
  );
}
