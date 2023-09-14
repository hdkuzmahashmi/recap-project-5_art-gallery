import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist, name, slug }) {
  return (
    <StyledListEntry>
      <Image width={200} height={200} src={image} alt={name} />
      <br />
      <small>{artist}</small>
      <br></br>
      <small>Slug: {slug}</small>
    </StyledListEntry>
  );
}
const StyledListEntry = styled.li`
  list-style: none;
  margin: 2rem;
`;
