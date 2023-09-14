import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const router = useRouter();
  const routerSlug = router.query.slug;

  const finddata = data.find((arrayItem) => {
    return arrayItem.slug === routerSlug;
  });

  const { imageSource, name, artist, year, genre, slug } = finddata;

  let isFavArt = false;
  const favArt = artPiecesInfo.find((artpiece) => artpiece.slug === routerSlug);

  if (favArt) isFavArt = favArt.isFavorite;

  return (
    <ArtPieceDetails
      image={imageSource}
      name={name}
      artist={artist}
      year={year}
      genre={genre}
      slug={slug}
      isFavorite={isFavArt}
      artPiecesInfo={artPiecesInfo}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
}
