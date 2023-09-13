import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
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
      </section>
    </>
  );
}
