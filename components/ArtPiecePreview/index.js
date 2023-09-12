import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledListEntry>
      <Image width={200} height={200} alt={title} src={image} />
      <br />
      <small>{`"${title}" by ${artist}`}</small>
    </StyledListEntry>
  );
}

const StyledListEntry = styled.li`
  list-style: none;
  margin: 2rem;
`;
