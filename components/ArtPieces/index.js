import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  console.log("artPiecesInfo infooooooo", artPiecesInfo);
  return (
    <ul>
      {pieces.map((piece) => {
        let isFavArt = false;
        const favArt = artPiecesInfo.find(
          (artpiece) => artpiece.slug === piece.slug
        );

        if (favArt) isFavArt = favArt.isFavorite;
        return (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={isFavArt}
            handleToggleFavorite={handleToggleFavorite}
          />
        );
      })}
    </ul>
  );
}
