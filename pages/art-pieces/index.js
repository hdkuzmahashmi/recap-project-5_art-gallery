import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  isFavorite,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={data}
      isFavorite={isFavorite}
      artPiecesInfo={artPiecesInfo}
      handleToggleFavorite={handleToggleFavorite}
    />
  );
}
