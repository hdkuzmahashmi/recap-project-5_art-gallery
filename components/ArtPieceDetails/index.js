import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  handleToggleFavorite,
}) {
  const router = useRouter();

  function handleBack() {
    router.push("/art-pieces");
  }
  return (
    <>
      <section>
        <button onClick={handleBack}>Back</button>
        <Image width={200} height={200} alt="test" src={image} />
        <br />
        <small>{`"${name}" by ${artist}`}</small>
        <small>Year : {year}</small>
        <small>genre : {genre}</small>
        <FavoriteButton
          slug={slug}
          isFavorite={isFavorite}
          handleToggleFavorite={handleToggleFavorite}
        ></FavoriteButton>
      </section>
    </>
  );
}
