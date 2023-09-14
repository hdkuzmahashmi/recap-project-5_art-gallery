import FavoriteButton from "@/components/FavoriteButton";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  data,
  slug,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  let randomArt = {};
  if (slug === "") {
    randomArt = data[Math.floor(Math.random() * data.length)];
  } else randomArt = data.find((art) => art.slug === slug);

  const artinfo = artPiecesInfo.find(
    (info) => info.slug === randomArt.slug
  ) ?? {
    isFavorite: false,
  };
  const { isFavorite } = artinfo;

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
        slug={randomArt.slug}
      />

      <FavoriteButton
        slug={randomArt.slug}
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}
      ></FavoriteButton>
    </div>
  );
}
